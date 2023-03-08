import React, { useState, useEffect } from 'react';
import './Nav.css';
import NFLogo from './assets/Netflix_Logo_RGB.png';
import NFAvatar1 from './assets/Netflix-avatar1.png';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

    const navigate = useNavigate();

    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 33) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    })
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img 
                className='nav__logo'
                src={NFLogo} alt="Netflix Logo"
                onClick={() => navigate('/')} />
                <img 
                className='nav__avatar'
                onClick={() => navigate('/profile')} 
                src={NFAvatar1} 
                alt="Avatar_Icon" />

            </div>
        </div>
    );
}

export default Nav;
