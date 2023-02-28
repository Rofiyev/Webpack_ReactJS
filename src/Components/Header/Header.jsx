import React from "react";
import { headerItems } from "../../Data";
import "./Header.css";
import leaf from "../../SVG/leaf.svg";
import search from "../../SVG/search.svg";
import shop from "../../SVG/shop.svg";

export default function Header() {
  return (
    <nav>
      <ul>
        {headerItems.map((item, index) => (
          <li key={index}>
            <a href="#"></a>
            {item}
          </li>
        ))}
      </ul>
      <img width="40" src={leaf} alt="Leaf" />
      <div className="login">
        <div className="icons">
          <button>
            <img src={search} alt="Search icon" className="icon" />
          </button>
          <button>
            <img src={shop} alt="Search icon" className="icon" />
          </button>
        </div>
        <button>Regestar Now</button>
      </div>
    </nav>
  );
}
