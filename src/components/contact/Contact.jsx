import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const divStyle = {
    marginTop: '0rem',
  }

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_gbpq4az', 'template_yg48q6k', form.current, '2ulGmZIdMK6VtjFUw')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">

          <article className="contact-option">
            <MdOutlineEmail className='icon-react'/>
            <h4 style={divStyle}>Email</h4>
            <a href="mailto:crazynes157@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact-option">
            <AiFillLinkedin className='icon-react'/>
            <h4 style={divStyle}>Linkdin</h4>
            <h5 style={divStyle}>Send a message on linkin</h5>
            <a href="https://www.linkedin.com/in/vitor-emanuel-9107081a4/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact