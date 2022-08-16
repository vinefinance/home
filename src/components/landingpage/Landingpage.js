import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cta from "../cta/Cta";
import Howitworks from "../howitworks/Howitworks";
import About from "../about/About";
import Community from "../community/Community";
import Investopedia from "../investopedia/Investopedia";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="landingpage-bg">
      <div className="sticky top-0" style={{ zIndex: 50 }}>
        <Header />
      </div>
      <div className="sticky top-0" style={{ zIndex: 1 }}>
        <Cta />
        <Howitworks />
        <Community />
        <About />
        <Investopedia />
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
