import React from "react";
import "./shimmer.styles.scss";

const Shimmer = () => {
  return (
    <div className="shimmer-preview-contaier">
      <h2>
        <span className="shimeer-title" />
        <span className="shimeer-title" />
      </h2>
      <div className="shimmer-preview">
        {[...Array(4).keys()].map((item, key) => (
          <div className="shimmer-card-container" key={key} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
