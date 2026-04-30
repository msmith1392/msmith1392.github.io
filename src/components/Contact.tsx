import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import FadeInSection from './FadeInSection';

const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID: string = import.meta.env.VITE_EMAILJS_USER_ID as string;

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

const Contact: React.FC = () => {
  const formRef: React.RefObject<HTMLFormElement | null> = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const isFormValid: () => boolean = (): boolean => {
    if (!formRef.current) {
      return false;
    }

    const nameInput: Element | RadioNodeList | null = formRef.current.elements.namedItem('name');
    const emailInput: Element | RadioNodeList | null = formRef.current.elements.namedItem('email');
    const messageInput: Element | RadioNodeList | null =
      formRef.current.elements.namedItem('message');
    const websiteInput: Element | RadioNodeList | null =
      formRef.current.elements.namedItem('website');

    // Honeypot anti-spam: if filled, it's a bot
    if (websiteInput instanceof HTMLInputElement && websiteInput.value) {
      setFeedback({ type: 'error', message: 'Submission flagged as spam.' });
      return false;
    }

    const nameValue: string = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : '';
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
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    if (!formRef.current || !isFormValid()) {
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then((): void => {
        setFeedback({ type: 'success', message: 'Your message has been sent. Thank you!' });
        setIsSending(false);
        formRef.current?.reset();
      })
      .catch((): void => {
        setFeedback({
          type: 'error',
          message: "Couldn't send message. Please try again or reach out via email in the footer.",
        });
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          {/* Section label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-navy mb-4">Get in touch</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Open to new opportunities, interesting problems. Drop me a message and I'll get back to
            you.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
            {/* Feedback banner */}
            {feedback && (
              <div
                className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${
                  feedback.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {feedback.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Name */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  pattern="[a-zA-Z\s'-]{2,}"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Timestamp */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
