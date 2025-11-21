import React from 'react';
import { ReactSVG } from 'react-svg';

const Advantages = (props) => {
    const { image, title } = props;

    return (
        <div className="advantagesCart">
            <div className="icon">
                <ReactSVG src={image} wrapper="div" />
            </div>
            <div className="titleCart">{title}</div>
        </div>
    );
};

export default Advantages;
