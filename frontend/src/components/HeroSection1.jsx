import React from "react";
import HeadAndDetails from "./HeadAndDetails";
import { Link } from "react-router";
const HeroSection1 = () => {
  return (
    <>
      <div className="hero-section1 flex-row">
        <div className="head-details-and-btn">
        <HeadAndDetails
          shortHead={"Web Developer"}
          mainHead={
            <>
              Hi, I'm Ammara Memon.<br /> A
            </>
          }
          spantext={" MERNstack"}
          mainHead2={" Developer"}
          para={
            "Passionate web developer with a creative mindset and a strong desire to build meaningful digital experiences. Dedicated to continuous learning and turning ideas into reality through clean and functional code."
          }
        />

        <div className="links">
          <Link to={"https://www.linkedin.com/in/ammara-memon-34774230a/"}> <i className="fa-brands fa-linkedin-in fa-lg"></i> </Link>
          <Link to={"https://github.com/Ammwali"}> <i className="fa-brands fa-github fa-lg"></i> </Link>
        </div>
        </div>
        <div className="hero1-img">
          <img src="\images\IMG_4757.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
