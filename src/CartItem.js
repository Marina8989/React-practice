import React from "react";

const CartItem = ({name, img, price, quantity}) => (
    <div>
        <h4>{name}</h4>
        <img src={img} width="200" alt=""/>
        <ul>
            <li>Price: ${price}</li>
            <li>Quantity: {quantity}</li>
            <li>Subtotal: ${price * quantity}</li>
        </ul>
    </div>
)

export default CartItem;