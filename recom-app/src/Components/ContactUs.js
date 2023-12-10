import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { useForm } from '@formspree/react';


const ContactUs = () => {

  const [state, handleSubmit] = useForm("xoqognaw",);
  if (state.succeeded) {
    return <p>Thanks for Feedback!</p>;
}

  return (
    <div>
      <div className="contact_main">

      <form action="" className='cont_form' onSubmit={handleSubmit} >

      <h1>Contact Us</h1>

      <div className="name_email">
        <input 
        type="text" 
        id='name'
        name='name'
        placeholder='Name'
          required
        />

        <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder='Email'
          required
        />
        
      </div>

      <div className="sub">
        <input type="text" 
        placeholder='Subject' 
        className='detail'
          required
        />
        <textarea name="message" id="message" className='detail' cols="30" rows="5" placeholder='Subject' required></textarea>
      </div>

      <button id='send_msg'>Send Message</button>
      

      </form>    
        
      <div className="info_us">
      <div className="info_detail">
      <h2 className='ddd'>Info</h2>
      <p> <AiOutlineMail/> {""}  Pant.aashu17@gmail.com</p>
      <p> <IoCall/>  9865630618</p>
      <p> <FaLocationDot/>  Maitidevi, Kathmandu</p>
      </div>
      </div>

      </div>
    </div>
  )
}

export default ContactUs
