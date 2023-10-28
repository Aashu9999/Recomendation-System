
import { Link } from 'react-router-dom';
import './app.css';
import { useFormik } from 'formik';
import { SignUpSchema } from '../schemas';

const initialValues = {
    name: "",
    email: "",
    password: "",
    conform_password:""
}

export default function SignUpPage() {

   const {values, errors, handleBlur, touched, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: SignUpSchema,
        onSubmit : (values, action) =>{
             action.resetForm();
             console.log(values);
        },

        
    })

return (
        
        <div className="text-center m-5-auto">
            
            
            <form onSubmit={handleSubmit}>
            <h2>Join us</h2>
                <p>
                    <label>Username</label><br/>
                    <input type="text" 
                    id='name'
                    name="name" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                     />
                    { errors.name && touched.name ? <p className='form_error'>{errors.name}</p>: null}
                </p>
                
                <p>
                    <label>Email address</label><br/>
                    <input type="email" 
                    name="email" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                     />
                   { errors.email && touched.email ? <p className='form_error'>{errors.email}</p>: null}
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" 
                    name="password" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                     />
                    { errors.password && touched.password ? <p className='form_error'>{errors.password}</p>: null}
                </p>

                <p>
                    <label> Conform Password</label><br/>
                    <input type="password" 
                    name="conform_password" 
                    value={values.conform_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                 />
                    { errors.conform_password && touched.conform_password ? <p className='form_error'>{errors.conform_password}</p>: null}
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