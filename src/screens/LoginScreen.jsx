import React, { useState } from 'react';
import "./LoginScreen.css";
import SignInScreen from './SignInScreen';
import NetflixLogo from '../assets/Netflix_Logo_RGB.png';

function LoginScreen() {

  const [signin, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src={NetflixLogo}
          alt="Netflix Logo" />
        <button
          onClick={() => setSignIn(true)}
          className='loginScreen__button'>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signin ? (<SignInScreen />) : (
            <>
              <h1>
                Unlimited movies, TV shows, and more.
              </h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen__input">
                <form>
                  <input
                    type="email"
                    placeholder='Email Adreess' />
                  <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen__getStarted'>
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default LoginScreen