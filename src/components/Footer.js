import React from 'react';
import './Footer.scss';
import logo from './../images/logo2.svg';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;