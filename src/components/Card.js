import React from 'react';

const Card = ({ loge }) => {
    return (
        <div className='card'>
            <p>{loge.title}</p>
        </div>
    );
};

export default Card;