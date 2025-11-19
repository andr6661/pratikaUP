import React from 'react';
import "./Cart.scss"
import Button from "../Button/Button.jsx";

const Cart = (props) => {
    const {image, title, description, btnTitle,
        popularAlert = false,
        newAlert = false} = props;
    return (
        <div className="cart">
            <aside className="alert">
                {popularAlert ? (
                    <div className="popular">
<p>Популярный</p>
                    </div>
                ) : null}
                {newAlert ? (
                    <div className="new">
                        <p>Новый</p>
                    </div>
                ) : null}
            </aside>

            <img src={image} alt="card_image"/>
            {title}
            <div className="description">{description}</div>
            <Button>{btnTitle}</Button>
        </div>
    );
};

export default Cart;