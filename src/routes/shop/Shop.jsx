import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-contaier">
      {/* {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))} */}
    </div>
  );
};

export default Shop;
