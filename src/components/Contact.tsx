import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Card from './Card';
import FadeInSection from './FadeInSection';

const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID: string = import.meta.env.VITE_EMAILJS_USER_ID as string;

const Contact: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  function isFormValid(): boolean {
    if (!formRef.current) {
      return false;
    }
    const nameInput: Element | RadioNodeList | null = formRef.current.elements.namedItem('name');
    const emailInput: Element | RadioNodeList | null = formRef.current.elements.namedItem('email');
    const messageInput: Element | RadioNodeList | null = formRef.current.elements.namedItem('message');
    const websiteInput: Element | RadioNodeList | null = formRef.current.elements.namedItem('website');

    // Honeypot anti-spam: should be empty, if not then bot detected
    if (
      websiteInput &&
      websiteInput instanceof HTMLInputElement &&
      websiteInput.value
    ) {
      setFeedback({ type: 'error', message: 'Submission flagged as spam.' });
      return false;
    }

    const nameValue: string =
      nameInput instanceof HTMLInputElement ? nameInput.value.trim() : '';
    const emailValue: string =
      emailInput instanceof HTMLInputElement ? emailInput.value.trim() : '';
    const messageValue: string =
      messageInput instanceof HTMLTextAreaElement ? messageInput.value.trim() : '';

    if (!/^[a-zA-Z\s'-]{2,}$/.test(nameValue)) {
      setFeedback({ type: 'error', message: 'Enter your full name (letters and spaces only).' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setFeedback({ type: 'error', message: 'Enter a valid email address.' });
      return false;
    }
    if (messageValue.length < 10) {
      setFeedback({ type: 'error', message: 'Message must be at least 10 characters.' });
      return false;
    }
    setFeedback(null);
    return true;
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    if (!isFormValid()) {
      return;
    }

    setIsSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        setFeedback({ type: 'success', message: 'Your message has been sent. Thank you!' });
        setIsSending(false);
        formRef.current?.reset();
      })
      .catch(() => {
        setFeedback({
          type: 'error',
          message: "Couldn't send message. Please try again or use the email icon in the footer.",
        });
        setIsSending(false);
      });
  };

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2 className="mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-12 mx-auto contact-card-max-width">
            <Card>
              <h5 className="card-title mb-4">Send a Message</h5>
              {feedback && (
                <div className={`alert alert-${feedback.type === 'success' ? 'success' : 'danger'}`}>
                  {feedback.message}
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
                {/* Hidden honeypot field for spam prevention */}
                <input
                  type="text"
                  name="website"
                  className="d-none"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-start w-100">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    pattern="[a-zA-Z\s'-]{2,}"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-start w-100">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-start w-100">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                  ></textarea>
                </div>
                {/* Timestamp for reference */}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <button type="submit" className="btn btn-success w-100" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
