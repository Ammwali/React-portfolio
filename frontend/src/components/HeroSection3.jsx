import React from "react";
import HeadAndDetails from "./HeadAndDetails";
import AboutCardsDetails from "./AboutCardsDetails";

const HeroSection3 = () => {
  return (
    <>
      <div className="hero-section3">
        <div className="head-details-and-btn">
          <HeadAndDetails
            shortHead={"About Me"}
            mainHead={"WHO AM"}
            spantext={" I"}
            mainHead2={"?"}
            para={
              "I'm a MERN Stack Developer passionate about building responsive, user-friendly web apps. I enjoy turning ideas into real projects using MongoDB, Express.js, React.js, and Node.js, and I'm always eager to learn, solve problems, and write clean, efficient code."
            }
          />
        </div>

        <div className="about-details-cards-con">
          <div className="about-detail-card-right name">
            <AboutCardsDetails
              icon={"ri-user-6-line ri-xl"}
              aboutHead={"First Name"}
              aboutSubHead={"Ammara"}
            />
          </div>
          <div className="about-detail-card-left lname">
            <AboutCardsDetails
              icon={"ri-user-6-line ri-xl"}
              aboutHead={"Last Name"}
              aboutSubHead={"Memon"}
            />
          </div>
          <div className="about-detail-card-left age">
            <AboutCardsDetails
              icon={"ri-cake-2-line ri-xl"}
              aboutHead={"Age"}
              aboutSubHead={"23"}
            />
          </div>
          <div className="about-detail-card-right nation">
            <AboutCardsDetails
              icon={"fa-regular fa-flag fa-lg"}
              aboutHead={"Nationality"}
              aboutSubHead={"Pakistani"}
            />
          </div>

          <div className="about-detail-card-right education">
            <AboutCardsDetails
              icon={"ri-graduation-cap-line ri-xl"}
              aboutHead={"Education"}
              aboutSubHead={"BCS"}
              university={"University Of Sindh"}
            />
          </div>
          <div className="about-detail-card-left email">
            <AboutCardsDetails
              icon={"ri-mail-line ri-xl"}
              aboutHead={"Email"}
              aboutSubHead={
                <a href="mailto:ammaraimran708@gmail.com">
                  Click to mail
                </a>
              }
            />{" "}
          </div>
          <div className="about-detail-card-left address">
            <AboutCardsDetails
              icon={"ri-map-pin-line ri-xl"}
              aboutHead={"Address"}
              aboutSubHead={"Hyderabad Sindh"}
            />
          </div>
          <div className="about-detail-card-right language">
            <AboutCardsDetails
              icon={"ri-translate-2 ri-xl"}
              aboutHead={"Language"}
              aboutSubHead={"English, Urdu"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection3;
