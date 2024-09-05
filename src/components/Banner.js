import React from 'react';
import './Banner.scss';

const Banner = (props) => {
    // props.img = image
    // props.opacity = opacity
    // props.text = text
    const text = props.text.split('\n'); // text par ligne

    return (
        <div className='Banner'
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundColor: `rgba(0, 0, 0, ${props.opacity})` //pourcentage d'assombrisement
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