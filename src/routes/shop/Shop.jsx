import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};

export default Shop;
