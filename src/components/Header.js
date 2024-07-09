import React from 'react';

import logo from './../images/logo.svg';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav className='NavBanner'>
                <ul>
                    <li className='NavActive'><Link to="/">Home</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;