import React from 'react';

const Advantages = (props) => {
    const {image, title } = props;
    return (
        <div className="advantagesCart">
            <div className='icon'><img src={image}width="72px" height="72px" color="var(--text-color)" alt=""/></div>
            <div className='titleCart'>{title}</div>
        </div>
    );
};

export default Advantages;