import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from '../Footer/Footer';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m6x14ld', 'template_5viwjo6', form.current, {
        publicKey: 'SUo1x9Mo6lJw2blWy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!'); // Display success message
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Oops! Something went wrong. Please try again later.'); // Display error message
        },
      );
  };

  return (
    <div>
      <div className='contact'>
        <h1>Send Message Here</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required/>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required/>

          <button className='but' type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;