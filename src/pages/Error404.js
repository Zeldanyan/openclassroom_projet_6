import React from 'react';
import './Error404.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <Header />
            <main className='e404'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </div>
    );
};

export default Error404;