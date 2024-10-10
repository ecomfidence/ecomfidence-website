'use client'
import { useState } from 'react';

export default function ContactForm1() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Show message after form submission
    form.querySelectorAll('*').forEach((element) => {
      element.style.display = 'none';
    });
    form.insertAdjacentHTML('afterbegin', '<p>Your submission has been processed...</p>');

    // Submit the form data to Google Forms
    fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    }).then(() => {
      setSubmitted(true);
    }).catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <form
        name="gform"
        id="gform"
        method="POST"
        action="https://docs.google.com/forms/d/1JP_GaMRRaJnxteLMqraSITi5wt4ge7f20m3c2Q8x4Q8/formResponse?"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
        <div>
          <label>First name:
            <input type="text" name="entry.1186786425" id="entry.1186786425" required />
          </label>
        </div>
        <div>
          <label>Last name:
            <input type="text" name="entry.84259249" id="entry.84259249" required />
          </label>
        </div>
        <div>
          <label>Message:
            <textarea name="message" required></textarea>
          </label>
        </div>
        <button type="submit">Send!</button>
      </form>

      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
    </>
  );
}
