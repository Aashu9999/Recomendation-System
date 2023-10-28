import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./app.css"
import { useFormik } from 'formik'
import { LoginSchema } from '../schemas'



const initialValues = ({
      name : "",
      password : "",
})

export default function SignInPage({closeModel}) {

    useEffect(

        () =>{
            document.body.style.overflow = "hidden";
            return () =>{
                document.body.style.overflow = "scroll";
            };
        }, []);
    

    const {values, errors, touched, handleBlur, handleChange, handleSubmit}= useFormik({
        initialValues: initialValues,
        validationSchema : LoginSchema,
        onSubmit:(values, action) =>{
            action.resetForm();
        }
    })

    return (
        
        <div className="text-center model-wrapper " onClick={closeModel}>
            
            
            <form onSubmit={handleSubmit}>
            
                       <h2>log in</h2>


                <p>
                    <label>Username/Email</label><br/>
                    <input type="text" 
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                     />
                     { errors.name && touched.name ? <p className='form_error'> {errors.name}</p> : null }
                </p>
                <p>
                    <label>Password</label>
                    
                    <br />
                    <input type="password" 
                    name="password" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    />

                  { errors.password && touched.password ? <p className='form_error'> {errors.password}</p> : null }

                    <br />
                    
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                </p>
                <p>
                    
                    <button id="sub_btn" type="submit" onClick={closeModel}>Login</button>
                    

                </p><p>First time? <Link to="/register">Create an account</Link>.</p>

            </form>

        </div>
    )
}