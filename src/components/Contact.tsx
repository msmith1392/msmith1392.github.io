import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Card from './Card';
import FadeInSection from './FadeInSection';
import { Box, TextField, Button, Alert, Typography } from '@mui/material';

const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const USER_ID: string = import.meta.env.VITE_EMAILJS_USER_ID as string;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  function isFormValid(): boolean {
    if (!formRef.current) {
      return false;
    }
    const nameInput = formRef.current.elements.namedItem('name') as HTMLInputElement | null;
    const emailInput = formRef.current.elements.namedItem('email') as HTMLInputElement | null;
    const messageInput = formRef.current.elements.namedItem('message') as HTMLTextAreaElement | null;
    const websiteInput = formRef.current.elements.namedItem('website') as HTMLInputElement | null;

    if (websiteInput && websiteInput.value) {
      setFeedback({ type: 'error', message: 'Submission flagged as spam.' });
      return false;
    }

    const nameValue = nameInput?.value.trim() || '';
    const emailValue = emailInput?.value.trim() || '';
    const messageValue = messageInput?.value.trim() || '';

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
    if (!formRef.current || !isFormValid()) {
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
    <section>
      <FadeInSection>
        <Typography variant="h4" align="center" gutterBottom>Contact Me</Typography>
        <Box display="flex" justifyContent="center">
          <Box width="100%" maxWidth={500}>
            <Card>
              <Typography variant="h6" gutterBottom>Send a Message</Typography>
              {feedback && (
                <Alert severity={feedback.type} sx={{ mb: 2 }}>
                  {feedback.message}
                </Alert>
              )}
              <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
                {/* Hidden honeypot field for spam prevention */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <Box mb={2}>
                  <TextField
                    label="Your Name"
                    name="name"
                    id="name"
                    required
                    fullWidth
                    inputProps={{ minLength: 2, pattern: "[a-zA-Z\\s'-]{2,}" }}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Your Email"
                    name="email"
                    id="email"
                    type="email"
                    required
                    fullWidth
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    label="Your Message"
                    name="message"
                    id="message"
                    multiline
                    rows={4}
                    required
                    fullWidth
                    inputProps={{ minLength: 10 }}
                  />
                </Box>
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Submit'}
                </Button>
              </form>
            </Card>
          </Box>
        </Box>
      </FadeInSection>
    </section>
  );
};

export default Contact;