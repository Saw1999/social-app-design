import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>SocialWorld</h3>
                <span className='loginDesc'>Stay connected with the world on SocialWorld!</span>

            </div>
            <div className='loginRight'>
                <form className='loginBox'>
                    <input type='email' required className='loginInput' placeholder='Enter your email' ></input>
                    <input type='password' required className='loginInput' placeholder='Enter your password' minLength='6'></input>
                    <button type='submit' className='loginBtn'>Log In</button>
                    <span className='loginForgot'>Forgot Password?</span>

                    <hr className='loginHr'/>
                    <span className='loginCreateAcc'>Don't have an account? Create one!</span>
                    <Link to="../register" style={{textAlign:'center'}}>
                        <button className='loginRegisterBtn'>Create account</button> 
                    </Link>              
                </form>
            </div>
        </div>

    </div>
  )
};
