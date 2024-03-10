import React from "react";
import "./Herosection.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const HeroSection = (data) => {
  return (
    <div className="heroSection">
      <div className="container">
        <div className="banner-Box">
          <div className="banner-content">
            <h4>This is me</h4>
            <h1>
            {data.name} <span>{data.title}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              quidem nesciunt natus obcaecati delectus nulla suscipit distinctio
              ratione mollitia ipsam in perferendis ex possimus voluptate
              tenetur odit, doloremque corrupti hic.
            </p>
            <Button>
            <NavLink to="/">Hire Me</NavLink>
          </Button>
          </div>
         
          <div className="banner-img">
            <picture>
              <img src="./images/banner-img.webp" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
