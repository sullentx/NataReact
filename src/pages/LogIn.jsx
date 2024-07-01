import React from 'react';
import './LogIn.css';
import Button from '../components/button/Button';
import logo from '../assets/images/logoCT.png'; 
import MenuBar from '../components/layout/header/MenuBar';

const LogIn = () => {
    return (
        <>
        <MenuBar></MenuBar>
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Logo" className="login-logo"/>
                <input type="email" placeholder="Email" className="login-input"/>
                <input type="password" placeholder="Password" className="login-input"/>
                <Button text="Iniciar sesión" />
            </div>
        </div>
        </>
    );
};

export default LogIn;
