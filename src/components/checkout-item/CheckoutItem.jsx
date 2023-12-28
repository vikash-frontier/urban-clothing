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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
