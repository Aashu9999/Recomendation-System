import React from 'react'
import { Link } from 'react-router-dom'
import "./app.css"
import { useFormik } from 'formik'
import { ForgetPasswordSchema } from '../schemas'

 const initialValues =({
    email : "",
 })

export default function ForgetPasswordPage() {

    const {handleBlur, values, errors, handleChange, handleSubmit, touched}= useFormik({
        initialValues : initialValues,
        validationSchema : ForgetPasswordSchema,
        onSubmit:(values, action) =>{
            console.log(values);
            action.resetForm();

        }
    })


    return (
        <div className="text-center m-5-auto">
            
            
            <form action="/login" onSubmit={handleSubmit}>
            
            <h2>Reset your password</h2>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" 
                    name="email" 
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    />

                    { errors.email && touched.email ? <p className='form_error'>{errors.email}</p> : null }
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p> <p>First time? <Link to="/register">Create an account</Link>.</p>
            </form>
        </div>
    )
}