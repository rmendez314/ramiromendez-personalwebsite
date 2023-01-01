import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import {IoIosText} from 'react-icons/io'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import env from './.env'
import './Contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a15udxt', 'template_j0n0cm8', form.current, 'vt0djqGz5T2AWHSiP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon"/>
            <h4>Email</h4>
            <h5>rdmendez314@gmail.com</h5>
            <a href="mailto:rdmendez314@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className="contact__option">
            <IoIosText className="contact__icon"/>
            <h4>Phone</h4>
            <h5>Text Me</h5>
            <a href="sms:+12105025970" target='_blank' rel='noreferrer'>Send a text</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
