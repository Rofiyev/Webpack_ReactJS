import React from "react";
import "../../Style/Menu.css";
import cucumber from "../../Containers/image/cucumber.png";
import lemon from "../../Containers/image/lemon.png";
import apple from "../../Containers/image/apple.png";
import gress from "../../Containers/image/gress.png";
import leaf from "../../Containers/image/homeLeaf.png";
import rightIcon from "../../SVG/right.svg";

export default function Menu() {
  return (
    <section id="menu">
      <div className="image">
        <div className="screen">
          <img src={cucumber} className="img-1" />
          <img src={lemon} className="img-2" />
          <img src={gress} className="img-3" />
          <img src={apple} className="img-4" />
          <div className="box-2"></div>
          <div className="box-3"></div>
          <div className="box-4"></div>
        </div>
      </div>
      <div className="info">
        <h1>Explor Our Special Items</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer...
        </p>
        <div className="row">
          <span>
            Order Now
            <button>
              <img src={rightIcon} alt="right-icon" className="bi" />
            </button>
          </span>
          <img src={leaf} alt="Leaf Image" className="leaf-img" />
        </div>
      </div>
    </section>
  );
}
