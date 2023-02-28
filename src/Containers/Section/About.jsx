import React from "react";
import "../../Style/About.css";
import start from "../../SVG/stars.svg";
import start_half from "../../SVG/stars_half.svg";
import rightIcon from "../../SVG/right.svg";
import leftIcon from "../../SVG/left.svg";
import person from "../image/about-user.png";
import user_1 from "../image/user-1.png";
import user_2 from "../image/user-2.png";
import user_3 from "../image/user-3.png";
import user_4 from "../image/user-4.png";
import user_5 from "../image/user-5.png";
import user_6 from "../image/user-6.png";
import plus from "../image/plus.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="info">
        <h1>What Our Customers About Us saying</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularis
        </p>
        <h3>Ahmed Hridoy</h3>
        <div className="wrapper">
          <div className="stars">
            <img src={start} alt="starIcon" />
            <img src={start} alt="starIcon" />
            <img src={start} alt="starIcon" />
            <img src={start} alt="starIcon" />
            <img src={start_half} alt="starIcon" />
          </div>
          <div className="buttons">
            <button className="not">
              <img src={leftIcon} alt="right-icon" className="bi" />
            </button>
            <button>
              <img src={rightIcon} alt="right-icon" className="bi active" />
            </button>
          </div>
        </div>
      </div>
      <div className="about-img">
        <div className="back">
          <img src={person} alt="" />
        </div>
        <div className="person">
          <div className="stars">
            <img src={start} alt="starIcon" />
            <img src={start} alt="starIcon" />
            <img src={start} alt="starIcon" />
            <img src={start} alt="starIcon" />
            <img src={start_half} alt="starIcon" />
          </div>
          <div className="wrapper-users">
            <img src={user_1} alt="User" />
            <img src={user_2} alt="User" />
            <img src={user_3} alt="User" />
            <img src={user_4} alt="User" />
            <img src={user_5} alt="User" />
            <img src={user_6} alt="User" />
            <img
              width={"20px"}
              src={plus}
              alt="Plus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
