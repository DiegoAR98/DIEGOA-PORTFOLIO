import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ftv86bd', 'template_1rn9rfx', form.current, 'QH5iE8ccVCn2dY2Lj')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" required placeholder="Your Name" />
      <input type="email" name="user_email" required placeholder="Your Email" />
      <textarea name="message" required placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
