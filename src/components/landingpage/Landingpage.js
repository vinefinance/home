import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Cta from "../cta/Cta";
import About from "../about/About";
import Community from "../community/Community";
import Investopedia from "../investopedia/Investopedia";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div>
      <div className="landingpage-bg">
        <Header />
        <Cta />
        <About />
        <Community />
        <Investopedia />
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
