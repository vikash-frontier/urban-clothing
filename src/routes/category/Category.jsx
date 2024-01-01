import React, { Fragment, useContext, useEffect, useState } from "react";

import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductContext";
import ProductCard from "../../components/product-card/ProductCard";
import Shimmer from "../../components/shimmer/Shimmer";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);

  const [categories, setCategories] = useState(products[category]);

  useEffect(() => {
    setCategories(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      {!categories ? (
        <Fragment>
          <Shimmer type="card-item" />
          <Shimmer type="card-item" shimmerTitle={true} />
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
            {categories?.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
