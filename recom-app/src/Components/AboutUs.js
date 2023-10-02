import React from 'react'
import img1 from "../assets/images/AboutImg.png"
// import img2 from "../assets/images/tikmark.png"

const AboutUs = () => {
  return (
    <>

    <div className="mainabout">
      <div className="image">
            <img src={img1} alt="imag" />
      </div>

      <div className="aboutinfo">

      <h1>About Us</h1>

      <p>Welcome to PilotEdu, your trusted partner in the exciting journey of college discovery. We understand that choosing the right college is one of life's most important decisions, and we are here to make that process easier, more personalized, and incredibly rewarding.</p>

      <div className="Who_We_Are">

      <h2>Who We Are</h2>
        <p>Our team combines expertise in education, technology, and college admissions. We've come together to create a user-friendly platform that leverages advanced algorithms to provide you with personalized college recommendations.</p>
      </div>

      <div className="Our_Mission">
        <h2>Our Mission</h2>
        <p>At EduHub, our mission is to empower students like you to make informed decisions about their academic future. We believe that the right college fit can open doors to endless opportunities, and we're committed to helping you discover that fit.</p>
      </div>
      </div>
       </div>
    </>
  )
}

export default AboutUs
