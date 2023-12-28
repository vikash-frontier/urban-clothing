import React, { useContext } from "react";

import "./checkout.styles.scss";
import { CartContext } from "../../context/CartContex";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-container">
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
    </div>
  );
};

export default Checkout;
