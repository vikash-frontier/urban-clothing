import React, { useContext } from "react";

import "./checkout-item.styles.scss";
import { CartContext } from "../../context/CartContex";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  const { removeCartItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const removeHandler = () => {
    removeCartItem(id);
  };
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <h2>{name}</h2>
      <div>
        <span onClick={() => removeItemFromCart(cartItem)}> Decrement</span>
        <span>{quantity}</span>
        <span onClick={() => addItemToCart(cartItem)}>Increment</span>
      </div>
      <span>{price}</span>
      <button onClick={removeHandler}>X</button>
    </div>
  );
};

export default CheckoutItem;
