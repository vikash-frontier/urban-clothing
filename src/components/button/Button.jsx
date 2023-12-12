import React from "react";
import { BUTTON_TYPE_CLASSES } from "../../utils/mockData";
import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
