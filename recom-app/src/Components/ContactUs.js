import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';


const ContactUs = () => {
  return (
    <div>
      <div className="contact_main">

      <form action="" className='cont_form'>

      <h1>Contact Us</h1>

      <div className="name_email">
        <input type="text" placeholder='Name'/>
        <input type="email" name="femail" id="email" placeholder='Email'/>
      </div>

      <div className="sub">
        <input type="text" placeholder='Subject' className='detail'/>
        <textarea name="fdetail" id="detail" className='detail' cols="30" rows="5" placeholder='Subject'></textarea>
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
