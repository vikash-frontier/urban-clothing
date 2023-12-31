import React from "react";
import { Link } from "react-router-dom";

import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  return (
    <div className="directory-item-container" key={category.id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />

      <Link
        to={`shop/${category.title.toLowerCase()}`}
        className="directory-body"
      >
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;
