import React from "react";

const ProductCard = ({ name: title, image, new_price, old_price }) => {
  // console.log(props);

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={image} alt="image..." />
      </div>
      <p className="product-title">{title}</p>
      <div className="product-prices">
        <p className="product-new-price">${new_price}</p>
        <p className="product-old-price">${old_price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
