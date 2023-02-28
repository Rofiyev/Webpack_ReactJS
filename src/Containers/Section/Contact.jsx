import React from "react";
import "../../Style/Contact.css";
import phone from "../image/phone.png";
import phone_body from "../image/body.png";

export default function Contact() {
  return (
    <section id="contact">
      <div className="image">
        <div className="phone">
          <img src={phone_body} alt="Phon" />
          <img src={phone} alt="Phon" />
        </div>
      </div>
      <div className="text">
        <div>
          <button>Download App</button>
          <h1>Simple Way To Order Your Organic Fruit </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>
          <div className="buttons">
            <button>
              <div className="icon">
                <img
                  src="https://zone-assets-api.vercel.app/assets/icons/app-store/ic_app_store.svg"
                  alt=""
                />
              </div>
              <div className="text">
                <h5>Download ob the</h5>
                <h3>App Store</h3>
              </div>
            </button>
            <button>
              <div className="icon">
                <img
                  src="https://zone-assets-api.vercel.app/assets/icons/app-store/ic_google_play.svg"
                  alt=""
                />
              </div>
              <div className="text">
                <h5>GET IT ON</h5>
                <h3>Google Play</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
