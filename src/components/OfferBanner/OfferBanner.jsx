import React, { useState } from "react";
import Button from "../Button/Button";
import bannerImg from "../../assets/product_22.png";

const OfferBanner = ({
  heading,
  subHeading,
  hours,
  minutes,
  image,
  buttonText,
}) => {
  return (
    <>
      <div className="offer-banner">
        <div className="offer-content">
          <p className="offer-heading">{heading}</p>

          {hours && minutes && (
            <p className="offer-duration">
              <span className="offer-duration-hours">{hours}</span> Hours{" "}
              <span className="offer-duration-minutes">{minutes}</span> Minutes
            </p>
          )}

          {subHeading && <p className="offer-sub-heading">{subHeading}</p>}
          <Button>{buttonText}</Button>
        </div>
        <div className="offer-img">
          <img src={image} alt="offer image" />
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
