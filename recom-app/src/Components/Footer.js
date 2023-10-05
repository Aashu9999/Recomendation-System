import React from 'react'
import "./app.css"

const Footer = () => {
  return (
    <>
    <footer>
    <div className='main_footer'>
      
      <div className="f_logo">
        <h3>Logp</h3>
      </div>

      <div className="all_quick_links">

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
      </div>

      <div className="emai_box">
       
      <input type="email" name="last_email" id="last_email" placeholder='Email'/>
      <button className='f_button'>send</button>

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
