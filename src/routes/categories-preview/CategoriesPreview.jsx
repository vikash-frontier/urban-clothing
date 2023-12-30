import React, { useContext, Fragment } from "react";

import { ProductsContext } from "../../context/ProductContext";
import ProductPreview from "../../components/product-preview/ProductPreview";

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => {
        const product = products[title];
        return <ProductPreview key={title} title={title} products={product} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
