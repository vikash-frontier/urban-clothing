import React, { useContext } from "react";

import "./cart-icon.styles.scss";
import { shoppingIcon } from "../../assets";
import { CartContext } from "../../context/CartContex";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const onCartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={onCartHandler}>
      <img src={shoppingIcon} alt="shoppingIcon" className="shopping-icon" />
      <span className="item-count">{cartItems?.length}</span>
    </div>
  );
};

export default CartIcon;
