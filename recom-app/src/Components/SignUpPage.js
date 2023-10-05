
import { Link } from 'react-router-dom'

import './app.css'

export default function SignUpPage() {



    return (
        
        <div className="text-center m-5-auto">
            
            
            <form >
            <h2>Join us</h2>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password1" requiredc />
                </p>

                <p>
                    <label> Conform Password</label><br/>
                    <input type="password" name="password2" requiredc />
                </p>


                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                
                    <button id="sub_btn" type="submit">Register</button>

                    <p className='back'><Link to="/">Back to Homepage</Link>.</p>
                </p>
            </form>
        </div>
    )

    
}