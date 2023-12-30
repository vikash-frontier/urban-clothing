import React from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/DirectoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
