import React from 'react';

const Cart = (props) => {
    const { children } = props;
    return (
        <div className="cart">
            {children}
        </div>
    );
};

export default Cart;