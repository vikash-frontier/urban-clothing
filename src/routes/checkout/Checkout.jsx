import React, { useContext } from "react";

import "./checkout.styles.scss";
import { CartContext } from "../../context/CartContex";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Descreption</span>
        </div>
        <div className="header-block">
          <span>Qunatity</span>
        </div>
        <div className="header-block">
          <span>Price($)</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
