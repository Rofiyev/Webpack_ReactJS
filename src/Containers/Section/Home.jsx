import React from "react";
import Header from "../../Components/Header/Header.jsx";
import "../../Style/Home.css";
import leaf from "../image/homeLeaf.png";
import fon from "../image/homeFon.png";
import rightIcon from "../../SVG/right.svg";
import user from "../../SVG/user.svg";
import star from "../../SVG/star.svg";
import basket from "../../SVG/basket.svg";
import { homwCardData } from "../../Data/index.js";

const icons = [user, star, basket];

export default function Home() {
  return (
    <>
      <Header />
      <section id="home">
        <img src={leaf} alt="Leaf image" className="leaf" />
        <div className="content">
          <h1>Organic Fruit & Vegetables</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley...
          </p>
          <span>
            Order Now
            <button>
              <img src={rightIcon} alt="right-icon" className="bi" />
            </button>
          </span>
        </div>
        <img src={fon} className="fon" />
        <div className="cards">
          {homwCardData.map((item, index) => (
            <div key={index} className="card">
              <div className="image">
                <img src={icons[index]} alt="user" className="icon" />
              </div>
              <div className="info">
                <h2>{item.number}</h2>
                <h4>{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
