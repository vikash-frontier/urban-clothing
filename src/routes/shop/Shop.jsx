import React, { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h1>{title}</h1>
          <div className="products-contaier">
            {products[title].map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
