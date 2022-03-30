import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xg031oz', 'template_ztq0bxt', form.current, 'ks8S0sFUXJRpvoku5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className='above' id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jaychavan2223@gmail.com</h5>
            <a href="mailto:jaychavan2223@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkeDin</h4>
            <h5>JAY CHAVAN</h5>
            <a href="https://www.linkedin.com/in/jay-chavan-585ba3203/" target='_blank'>Visit</a>
          </article>
          <article className="contact__option">
            <AiFillGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>JayChavan-23</h5>
            <a href="https://github.com/JayChavan-23" target='_blank'>Visit</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/ }
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />           
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>  
          <button type='submit' className='btn btn-primary'> Send Message</button>         
        </form>
      </div>
    </section>
  )
}

export default Contact