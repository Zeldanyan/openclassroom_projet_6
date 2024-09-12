import React, { useState } from 'react';
import './Slideshow.scss';
import aprev from './../images/arrow_prev.svg';
import anext from './../images/arrow_next.svg';

// navigation d'image

const Slideshow = ({ IMGs }) => { // IMGs = tableau des images
    const [index, setIndex] = useState(0)

    const prev = () => { //image precedente
        if (index === 0) {
            setIndex(IMGs.length - 1)
        } else setIndex(index - 1)
    }

    const next = () => { // image suivante
        if (index === IMGs.length - 1) {
            setIndex(0)
        } else setIndex(index + 1)
    }

    return (
        <div className='Slideshow'>
            <img src={IMGs[index]} alt="" className="pictures" />
            <img src={aprev} alt="" className="prev" onClick={prev} style={{ display: IMGs.length <= 1 ? 'none' : 'block' }} />
            <img src={anext} alt="" className="next" onClick={next} style={{ display: IMGs.length <= 1 ? 'none' : 'block' }} />
            <div className="counter" style={{ display: IMGs.length <= 1 ? 'none' : 'block' }}>
                {`${index + 1}/${IMGs.length}`}
            </div>
        </div>
    );
};

export default Slideshow;