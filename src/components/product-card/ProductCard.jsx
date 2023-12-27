import React, { useContext } from "react";

import Button from "../button/Button";
import "./product-card.styles.scss";
import { CartContext } from "../../context/CartContex";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    console.log("Hiiii");
    addItemToCart(products);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
