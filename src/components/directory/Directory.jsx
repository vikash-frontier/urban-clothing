import React, { Fragment } from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/DirectoryItem";

const Directory = ({ categories }) => {
  return (
    <Fragment>
      <h2 className="directory-title">Welcome to Urban Clothing</h2>
      <div className="directory">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </Fragment>
  );
};

export default Directory;
