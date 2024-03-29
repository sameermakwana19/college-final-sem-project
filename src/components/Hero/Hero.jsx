import React from "react";
import heroImage from "../../assets/hero_image.png";
import handIcon from "../../assets/hand_icon.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text-container">
          <p className="hero-heading">New Arrivals only</p>

          <h1 className="hero-description">
            new <img src={handIcon} className="hand-icon" />
            collection <br />
            for everyone
          </h1>
          <Button> Latest Collection </Button>
        </div>

        <div className="hero-img-container">
          <img src={heroImage} alt="" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
