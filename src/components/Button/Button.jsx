import React from "react";

const Button = ({ children, ...delegated }) => {
  return (
    <>
      <button className="btn" {...delegated}>
        {children}
      </button>
    </>
  );
};

export default Button;
