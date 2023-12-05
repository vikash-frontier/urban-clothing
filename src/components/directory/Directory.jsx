import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../category-item/CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
