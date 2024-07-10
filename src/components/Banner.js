import React from 'react';
import './Banner.scss';

const Banner = (props) => {
    console.log(props);

    return (
        <div className='Banner'
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundColor: `rgba(0, 0, 0, ${props.opacity})`
            }}>
            <h1>{props.text}</h1>
        </div>
    );
};

export default Banner;