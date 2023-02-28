import React from "react";
import { servicesCardData } from "../../Data";
import "../../Style/Services.css";
import trunck from "../../SVG/trunck.svg";
import list from "../../SVG/list.svg";
import clock from "../../SVG/clock.svg";
import services_user from "../image/services-user.png";

const icons = [trunck, list, clock];

export default function Services() {
  return (
    <section id="services">
      <div className="info">
        <h1>Why We Aer The Best?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>
        <div className="cards-services">
          {servicesCardData.map((item, index) => (
            <div className="card-services">
              <div className="icons">
                <img src={icons[index]} alt="icon" className="icon" />
              </div>
              <div className="title">
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="image">
        <div className="box">
          <img
            src={services_user}
            alt="About-image"
            className="services-user"
          />
        </div>
      </div>
    </section>
  );
}
