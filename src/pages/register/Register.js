import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>SocialWorld</h3>
                <span className='loginDesc'>Stay connected with the world on SocialWorld!</span>

            </div>
            <div className='loginRight'>
                <form className='loginBox'>
                    <input type='text' required className='loginInput' placeholder='Enter your name' ></input>
                    <input type='email' required className='loginInput' placeholder='Enter your email' ></input>
                    <input type='password' required minLength='6' className='loginInput' placeholder='Enter your password'></input>
                    <input type='password' required minLength='6' className='loginInput' placeholder='Confirm password'></input>
                    <button type='submit' className='loginBtn'>Sign up</button>

                    <hr className='loginHr'/>
                    <Link to="../login" style={{textAlign:'center'}}>
                        <button className='loginRegisterBtn'>Log In</button>
                    </Link>                 
                </form>
            </div>
        </div>
    </div>
  );
}
