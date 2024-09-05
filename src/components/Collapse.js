import React, { useState } from 'react';
import './Collapse.scss';
import collClose from './../images/collClose.svg';
import collOpen from './../images/collOpen.svg';

const Collapse = (props) => {
    //props.title = title
    //props.text = text
    //props.list = bool true if text is a list
    const [open, setOpen] = useState(false);

    const toggle = () => { //toggle open/close collapse
        setOpen(!open);
    };

    return (
        <div className='Collapse'>
            <div className='title'>
                <p>{props.title}</p>
                <img src={open ? collOpen : collClose} alt="fleche" onClick={toggle} />
            </div>
            <div className='text' style={open ? {} : { display: 'none' }}>
                {props.list ?
                    props.text.map((item) => <p key={item}>{item}</p>) :
                    <p >{props.text}</p>}
            </div>
        </div >
    );
};

export default Collapse;