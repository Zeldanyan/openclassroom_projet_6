import React, { useState } from 'react';
import './Slideshow.scss';
import aprev from './../images/arrow_prev.svg';
import anext from './../images/arrow_next.svg';

const Slideshow = ({ IMGs }) => {
    const [index, setIndex] = useState(0)

    const prev = () => {
        if (index === 0) {
            setIndex(IMGs.length - 1)
        } else setIndex(index - 1)
    }

    const next = () => {
        if (index === IMGs.length - 1) {
            setIndex(0)
        } else setIndex(index + 1)
    }

    return (
        <div className='Slideshow'>
            <img src={IMGs[index]} alt="" className="pictures" />
            <img src={aprev} alt="" className="prev" onClick={prev} />
            <img src={anext} alt="" className="next" onClick={next} />
            <div className="counter">
                {`${index + 1}/${IMGs.length}`}
            </div>
        </div>
    );
};

export default Slideshow;