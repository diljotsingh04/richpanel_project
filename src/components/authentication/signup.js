import React from 'react';
import './signup_login.css';
import { database } from './firebaseAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        createUserWithEmailAndPassword(database, email, password).then(data=>{
            history('/login');
        }).catch(err =>{
            alert(err.code);
        })
    }
  return (
    <>
        <div className="signup_page">
            <div className="center_white_box">
                <h3>Create Account</h3>
                <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>     {/* for handling the form | calls handlesubmit funciton */}
                    <div className="field input_name">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" id="name"  placeholder="Enter your name" required />
                    </div>
                    <div className="field input_email">
                        <label htmlFor="email">Email</label><br/>
                        <input type="text" id="email" name='email' placeholder="Enter your email" required />
                    </div>
                    <div className="field input_password">
                        <label htmlFor="email">Password</label><br/>
                        <input type="password" id="password" name='password' placeholder="Enter your password" required />
                    </div>
                    <div className="input_check">
                        <input type="checkbox" name="remem" id="remem" /> 
                        <label htmlFor="remem">Remember Me</label>
                    </div>
                    <div className="field submit_signup">
                        <button id='submit_button'>Sign Up</button>
                    </div>
                </form>
                <div className="have_account">
                    <span id="after_text">Already have an account? <span id="linker"><a href="/login">Login</a></span></span>
                </div>
            </div>
        </div>
    </>
  );
}

export default Signup;
