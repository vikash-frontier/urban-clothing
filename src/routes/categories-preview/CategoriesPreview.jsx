import React, { useContext, Fragment } from "react";

import { ProductsContext } from "../../context/ProductContext";
import ProductPreview from "../../components/product-preview/ProductPreview";
import Shimmer from "../../components/shimmer/Shimmer";

const CategoriesPreview = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).length === 0 ? (
        <>
          <Shimmer />
          <Shimmer />
        </>
      ) : (
        <Fragment>
          {Object.keys(products).map((title) => {
            const product = products[title];
            return (
              <ProductPreview key={title} title={title} products={product} />
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
