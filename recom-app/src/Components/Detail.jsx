import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import Select from 'react-select'
import { NavLink } from 'react-router-dom';

const Detail = () => {

  const options = [
    {value: "COMPUTER ENGINEERING", label: "Computer Engineering"},
    {value: "CSIT", label: "CSIT"},
    {value: "SOFTWARE ENGINEERING", label: "Software Engineering"},
    {value: "COMPUTER APPLICATION", label: "Computer Application"},
    {value: "CANDY", label: "candy"},
    {value: "CANDY", label: "candy"},
    {value: "CANDY", label: "candy"},
    {value: "CANDY", label: "candy"},
  ]


  return (
    <div>
      <div className="mainContainer">
      
        
        <div className="detail_page">
        <NavLink to = "/">
         <div className="back_btn">
               <button className='btn'> <BiArrowBack/>  Back  </button>
        </div></NavLink>
            <form className='detail_page_form'>
            <h2>Join us</h2>
                <p>
                    <label>GPA Score</label><br/>
                    <input type="text" 
                    id='GPA'
                    name="GPA"        
                     />
                    
                </p>
                
                <p>
                    <label>Enter Location</label><br/>
                    <input type="text" 
                    name="location" 
                     />
                   
                </p>

                <p>
                    <label> Choose Acadamic Program </label><br/>
                    <Select 
                    options = {options} 
                    // defaultValue={options}
                    placeholder = "Enter the option"

                    styles={{

                    }}
                    />
                
                </p>


                <p>
            
                    <button id="sub_btn" type="submit">Register</button>
                

                </p>
            </form>
        </div>
        </div>
      </div>
  )
}

export default Detail
