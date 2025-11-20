import React from 'react';
import "./Review.scss";
const Review = (props) => {
    const {img, name,old, icon} = props;
    return (
        <div className="review">
            <div className="logo">
                <img src={img} alt=""/>
            </div>
            <div className="name">{name}</div>
            <div className="old">{old}</div>
            <div className="icon"><img src={icon} alt=""/></div>
        </div>
    );
};

export default Review;