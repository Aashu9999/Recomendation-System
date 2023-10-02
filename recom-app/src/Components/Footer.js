import React from 'react'
import "./login.css"

const Footer = () => {
  return (
    <>
    <footer>
    <div className='main_footer'>
      
      <div className="f_logo">
        <h3>Logp</h3>
      </div>

      <div className="Quick_links">
          <h3>Quick Links</h3>
          <p>Privacy Polacy</p>
          <p>Terms and Conditions</p>

      </div>

      <div className="Quick_links">
      <h3>Quick Links</h3>
          <p>Privacy Polacy</p>
          <p>Terms and Conditions</p>


      </div>
      <div className="Quick_links">
      <h3>Quick Links</h3>
          <p>Privacy Polacy</p>
          <p>Terms and Conditions</p>


      </div>

      <div className="emai_box">

      <input type="email" name="last_email" id="last_email" placeholder='Email'/>

      </div>
      
    </div>
     <div className="copy_right">
        <h6>@All rights copyright Reserved.</h6>
     </div>
    </footer>
    </>
  )
}

export default Footer
