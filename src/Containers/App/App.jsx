import React from "react";
import About from "../Section/About.jsx";
import Contact from "../Section/Contact.jsx";
import Footer from "../Section/Footer.jsx";
import Home from "../Section/Home.jsx";
import Menu from "../Section/Menu.jsx";
import Services from "../Section/Services.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Home />
      <Services />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
