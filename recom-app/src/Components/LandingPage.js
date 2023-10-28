import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./app.css"
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from "./Footer"
import SignInPage from "./Login"

export default function LandingPage() {
    const[mylogin, setMylogin] = useState(false);
    const closeModel = () => setMylogin(false);
    return (

      <div className="parent">

        <div className="HeaderStyle">


<nav className="navbar">
      <div className="navbar-logo">
        
      </div>
      <ul className="navbar-links">
        <li className='first_nav'><Link to ="/AboutUs">About Us</Link></li>
        <li><Link to ="/register">Register</Link></li>
        <li onClick={() => setMylogin(true)}>Login</li>
        <li><Link to ="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
                <div className="main">

                <div className="model">
                {mylogin && <SignInPage closeModel={closeModel}/>}
                </div>

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

                <div className="model">
                {mylogin && <SignInPage/>}
                </div>

                <div className="contact">
                <ContactUs/>
                </div>

                <div className="footer">
                      <Footer/>
                </div>

            </div>
    
    )
}