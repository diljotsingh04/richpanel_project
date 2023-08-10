import React from 'react'
import { database } from './firebaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(database, email, password).then(data=>{
            history('/hero_page');
        }).catch(err =>{
            alert(err.code);
        })
    }

  return (
    <div className="signup_page">
        <div className="center_white_box">
            <h3>Login to your account</h3>
            <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                <div className="field input_email">
                    <label htmlFor="email">Email</label><br/>
                    <input type="text" id="email" placeholder="Enter your email" required/>
                </div>
                <div className="field input_password">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" id="password" placeholder="Enter your password" required/>
                </div>
                <div className="input_check">
                    <input type="checkbox" name="remem" id="remem"/>
                    <label htmlFor="remem">Remember Me</label>
                </div>
                <div className="field submit_signup">
                    <button id='submit_button'>Login</button>
                </div>
            </form>
            <div className="have_account">
                <span id="after_text">New to MyApp? <span id="linker"><a href="/">Sign Up</a></span></span>
            </div>
        </div>
    </div>
  )
}

export default Login;
