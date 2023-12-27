import React from "react";
import "./cart-icon.styles.scss";
import { shoppingIcon } from "../../assets";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img src={shoppingIcon} alt="shoppingIcon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
