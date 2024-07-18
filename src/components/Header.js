import React from 'react';

import logo from './../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav className='NavBanner'>
                <ul>
                    <li className={path === "/" ? 'NavActive' : ''}><Link to="/">ACCUEIL</Link></li>
                    <li className={path === "/about" ? 'NavActive' : ''}><Link to="/about">A PROPOS</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;