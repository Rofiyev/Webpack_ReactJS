import React from "react";
import { footertData } from "../../Data";
import "../../Style/Footer.css";
import leaf from "../../SVG/leaf.svg";
import facebook from "../../SVG/facebook.svg";
import instagram from "../../SVG/instagram.svg";
import twitter from "../../SVG/twitter.svg";

const socials = [facebook, instagram, twitter];

export default function Footer() {
  return (
    <section id="footer">
      <div className="col-1">
        <img width={"70"} src={leaf} alt="Leaf" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aliquid dicta modi quas atque laudantium non sed blanditiis ea quos
          iusto minus, magnam, debitis placeat facere quod nemo quidem impedit.
        </p>
      </div>
      <div className="col-2">
        <h2>Navigator</h2>
        {footertData.item_1.map((item, i) => (
          <h4 key={i}>{item}</h4>
        ))}
      </div>

      <div className="col-3">
        <h2>Resources</h2>
        {footertData.item_2.map((item, i) => (
          <h4 key={i}>{item}</h4>
        ))}
      </div>

      <div className="col-4">
        <h2>Contact Us</h2>
        <h4>Email: oyasim@gmail.com</h4>
        <div className="icons-footer">
          {socials.map((item) => (
            <a href="#">
              <img
                style={{ cursor: "pointer" }}
                width={"25"}
                src={item}
                alt="icons"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
