import React from 'react'
import { useRef } from 'react';
import './contact.css'
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nl8y5jj', 'template_t9lx6sg', form.current, {
        publicKey: 'QrLQm0T0Yjw58KzZw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h4>Get in Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMailOutline className='contact_option-icon' />
            <h4>Email</h4>
            <h5>agrawalakshat582@gmail.com</h5>
            <a href="mailto:agrawalakshat582@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 8976616411</h5>
            <a href="https://wa.me/+918976616411" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact