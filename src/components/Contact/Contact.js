import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';

import './Contace.css'
import { GrHtml5 } from "react-icons/gr";
import { BiMessageRounded } from "react-icons/bi";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qhl90g4', 'template_bvxqsff', form.current, 'QboxwCZie8lBVPZ0Z')
      e.target.reset()
  };
    return (
        <section className='contact section' id='contact'>
        <h2 className="section_title">Get in touch</h2>
        <span className='section_subtitle'>Contact Me</span>

        <div className="contace_container container grid">

        <div className="contact_content">
        <h3 className='contact_title'>Talk to me</h3>

        <div className="contact_info">

        <div className="contact_card">
        <i><GrHtml5 className='contact_card-icon'></GrHtml5></i>
        <h3 className='contact_card-title'>Email</h3>
        <span className='contact_card-data'>omarabdullah917303@gmail.com</span>
        <a href="https://mail.google.com/" className='contact_button'>Write me </a>
        </div>

        <div className="contact_card">
        <i><GrHtml5 className='contact_card-icon'></GrHtml5></i>
        <h3 className='contact_card-title'>Whatsapp</h3>
        <span className='contact_card-data'>01624108866</span>
        <a href="https://www.whatsapp.com/" className='contact_button'>Write me </a>
        </div>


        <div className="contact_card">
        <i><GrHtml5 className='contact_card-icon'></GrHtml5></i>
        <h3 className='contact_card-title'>FaceBook</h3>
        <span className='contact_card-data'>Omar Abdullah</span>
        <a href="https://www.facebook.com/omarabdullah.omar.37" className='contact_button'>Write me </a>
        </div>

        </div>
        </div>

        <div className="contact_content">
        <h3 className='contact_title'>Write me your project</h3>

        <form ref={form} onSubmit={sendEmail} action="" className='contact_form'>

       
        
        <div className="contact_form-div">
        <label htmlFor="" className='contact_form-tag'>Name</label>
        <input type="text" name='name' className='contact_form-input' placeholder='Insert your name' />
        </div>

        <div className="contact_form-div">
        <label htmlFor="" className='contact_form-tag'>Email</label>
        <input type="email" name='email' className='contact_form-input' placeholder='Insert your email' />
        </div>

        <div className="contact_form-div contact_form-area">
        <label htmlFor="" className='contact_form-tag'>Project</label>
        <textarea name="project" id="" cols="30" rows="10" className='contact_form-input ' placeholder='write your project'></textarea>
        </div>

        <button href="" className='button button--flex'>
            Send Message
            <i className='buttonmessage'><BiMessageRounded></BiMessageRounded></i>

            </button>

        </form>
        </div>

        </div>


        </section>
    );
};

export default Contact;