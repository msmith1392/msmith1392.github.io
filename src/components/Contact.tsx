import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Card from './Card';
import FadeInSection from './FadeInSection';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!form.current) {
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setSent(true);
        setError(null);
        form.current?.reset();
      }, () => {
        setError("Failed to send message. Please try again later. You can also contact me directly using the email icon in the footer below.");
      });
  };

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2 className="mb-4 text-center">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-12 mx-auto" style={{ maxWidth: "700px" }}>
            <Card>
              <h5 className="card-title mb-4 text-center">Send a Message</h5>
              {sent && <div className="alert alert-success">Message sent! Thank you.</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-start w-100">Your Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-start w-100">Your Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-start w-100">Your Message</label>
                  <textarea className="form-control" id="message" name="message" rows={4} required></textarea>
                </div>
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <button type="submit" className="btn btn-success w-100">
                  Submit
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
