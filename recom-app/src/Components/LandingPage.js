import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from "./Footer"

export default function LandingPage() {
    return (

      <>

        <div className="HeaderStyle">


<nav className="navbar">
      <div className="navbar-logo">
        <img src="https://www.shutterstock.com/shutterstock/videos/1069844197/thumb/5.jpg?ip=x480" alt="" />
      </div>
      <ul className="navbar-links">
        <li><Link to ="/AboutUs">About Us</Link></li>
        <li><Link to ="/register">Register</Link></li>
        <li><Link to ="/Login">Login</Link></li>
        <li><Link to ="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
                <div className="main">
            <h1 className="main-title">The Future Starts With Your College</h1>
            <p className="main-para ">We're here to guide you through the journey of discovering your dream college, exclusively focusing on college recommendations to simplify your selection process.</p>
            
            <div className="button-sec">
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
                </div>
                </div>
                </div>
                
                <div className='About'>
                  <AboutUs/>
                </div>

                <div className="contact">
                <ContactUs/>
                </div>

                <div className="footer">
                      <Footer/>
                </div>

            </>
    
    )
}