import React from "react";

import "./product-preview.style.scss";
import ProductCard from "../product-card/ProductCard";

const ProductPreview = ({ title, products }) => {
  return (
    <div className="product-preview-contaier">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductPreview;
