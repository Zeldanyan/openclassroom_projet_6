import React from 'react';
import './Card.scss';

const Card = ({ loge }) => {
    return (
        <div className='card'>
            <p>{loge.title}</p>
        </div>
    );
};

export default Card;