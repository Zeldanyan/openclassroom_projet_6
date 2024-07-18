import React from 'react';
import './Banner.scss';

const Banner = (props) => {
    const text = props.text.split('\n');

    return (
        <div className='Banner'
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundColor: `rgba(0, 0, 0, ${props.opacity})`
            }}>
            <h1>{text.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index < text.length - 1 && <br />}
                </React.Fragment>
            ))}</h1>
        </div>
    );
};

export default Banner;