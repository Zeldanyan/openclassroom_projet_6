import React from 'react';
import logo from './../logo.svg';

const Banner = () => {
    return (
        <header>
            <img src={logo} alt="Logo Kasa" />
            <nav className='NavBanner'>
                <ul>
                    <li className='NavActive'>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </header>
    );
};

export default Banner;