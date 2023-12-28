import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import "./checkout-item.styles.scss";
import { CartContext } from "../../context/CartContex";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  const {
    removeCartItem,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  } = useContext(CartContext);

  const decrementQntHandler = () => {
    removeItemFromCart(cartItem);
  };
  const incrementQntHandler = () => {
    addItemToCart(cartItem);
  };

  const onClearHandler = () => {
    clearItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementQntHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementQntHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={onClearHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
