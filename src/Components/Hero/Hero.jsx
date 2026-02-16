import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle, image }) => {
  return (
    <div className="hero">
      <img src={image} alt={title} className="hero-bg" />

      <div className="hero-overlay"></div>

      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
