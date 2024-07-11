import React, { useState } from 'react';
import './Collapse.scss';
import collClose from './../images/collClose.svg';
import collOpen from './../images/collOpen.svg';

const Collapse = (props) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className='Collapse'>
            <div className='title' onClick={toggle}>
                <p>{props.title}</p>
                <img src={open ? collOpen : collClose} alt="fleche" />
            </div>
            <p className='text' style={open ? {} : { display: 'none' }}>{props.text}</p>
        </div >
    );
};

export default Collapse;