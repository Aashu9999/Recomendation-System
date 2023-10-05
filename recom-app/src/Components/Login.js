import React from 'react'
import { Link } from 'react-router-dom'
import "./app.css"

export default function SignInPage() {
    return (
        
        <div className="text-center">
            

            <form action="/home">
            
                       <h2>log in</h2>


                <p>
                    <label>Username/Email</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    
                    <br />
                    <input type="password" name="password" required />

                    <br />
                    
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p><p>First time? <Link to="/register">Create an account</Link>.</p>

            </form>

        </div>
    )
}