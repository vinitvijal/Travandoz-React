import React from 'react'
import './Login.css'
// Login page with two section left side login form and right side image and login form contains email and password field and login button and login with google button
export default function Login() {
  return (
    <div className="main">
        <div className='container'>
            <div className="leftsection">
                <div className="loginform">
                    <div className="loginWithEmail">
                        <div className="loginWithEmailHeading">
                            <span>Log in</span>
                        </div>
                        <div className="loginWithEmailForm">
                            <div className="emailField">
                                <label htmlFor="email">Email</label>
                                <input type="text" placeholder="Email" id='email' />
                            </div>
                            <div className="passwordField">
                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Password" id='password' />
                            </div>
                            <div className="loginButton">
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                    <div className="breakSection"></div>
                    <div className="loginWithApps"></div>
                </div>
            </div>  
            <div className="rightsection">
                <span>Travendoz</span>
            </div>
        </div>
    </div>
    
  )
}
