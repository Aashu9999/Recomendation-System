import React from 'react'
import { Link } from 'react-router-dom'
import "./app.css"

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            
            
            <form action="/login">
            
            <h2>Reset your password</h2>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p> <p>First time? <Link to="/register">Create an account</Link>.</p>
            </form>
        </div>
    )
}