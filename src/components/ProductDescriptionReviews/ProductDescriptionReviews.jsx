import React, { useState } from "react";

const ProductDescriptionReviews = () => {
  const [visible, setVisible] = useState("description");

  return (
    <div className="product-description-reviews-container">
      <div className="header">
        <div
          className={
            visible === "description" ? "description active" : "description"
          }
          onClick={() => {
            setVisible("description");
          }}
        >
          Description
        </div>
        <div
          className={visible === "reviews" ? "reviews active" : "reviews"}
          onClick={() => {
            setVisible("reviews");
          }}
        >
          Reviews
        </div>
      </div>
      <div className="body">
        {visible === "description"
          ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia exercitationem illum repellendus ipsum labore error ad accusamus in necessitatibus!"
          : "Reviews : lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia exercitationem illum repellendus ipsum labore error ad accusamus in necessitatibus!"}
      </div>
    </div>
  );
};

export default ProductDescriptionReviews;
