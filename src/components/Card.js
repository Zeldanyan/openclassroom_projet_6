import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ loge }) => { //loge = database donnée du logement
    return (
        <figure className='card'>
            <Link to={`/logement/${loge.id}`}>
                <img className='cardimg' src={loge.cover} alt="Kasa" />
                <p>{loge.title}</p>
            </Link>
        </figure>
    );
};

export default Card;