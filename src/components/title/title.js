import React from 'react';
import './title.css';

const Title = ({ title }) => {
    console.log(title)
    return (
        <div className="main-container container">
            <p className="description _anim-items _anim-no-hide">Календарь значимых дат России</p>
            <h1 className="caption _anim-items _anim-no-hide">{title}</h1>
        </div>
    )
}

export default Title;