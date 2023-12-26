import React, { useContext } from "react";
import SHOP_DATA from "../../shopdata/shop-data.json";
import { ProductsContext } from "../../context/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map(({ id, name, imageUrl }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
