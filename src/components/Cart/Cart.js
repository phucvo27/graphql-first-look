import React from 'react';

const Cart = (props) => {
    const numberOfItem = Object.keys(props.cart).length;
    return (
        <div>
            Item on Cart: {numberOfItem}
        </div>
    )
}

export default Cart;