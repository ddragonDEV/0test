import React from 'react'
import './styles.css';
import logo from '../../assets/logo.png'

const Logo = () =>(
    <div className="logoContainer">
        <img  className="logo"  src={logo}/>
    </div>
);

export default Logo;