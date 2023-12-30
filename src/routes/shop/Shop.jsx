import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop.styles.scss";
import ProductPreview from "../../components/product-preview/ProductPreview";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {Object.keys(products).map((title) => {
        const product = products[title];
        return <ProductPreview key={title} title={title} products={product} />;
      })}
    </div>
  );
};

export default Shop;

{
  /* <Fragment key={title}>
<h1>{title}</h1>
<div className="products-contaier">
  {products[title].map((product) => (
    <ProductCard key={product.id} products={product} />
  ))}
</div>
</Fragment> */
}
