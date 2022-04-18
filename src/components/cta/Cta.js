import React from "react";
import savannah from "../../assets/images/savannah.jpeg";
import Subscribe from "../subscribe/Subscribe";
import "./Cta.css"

function Cta() {
  return (
    <div id="Cta">
      <div>
        <div className="relative">
          <div className="flex-shrink-0" />
          <div>
            <div className="flex-shrink-0">
              
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={savannah}
                  alt="savannah"
                />
                <div className="absolute inset-0 bg-blue-300 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    VINE is Democratizing Investing for ALL
                  </span>
                </h1>
                <div class="cta-text-shadow">
                <h2 className="text-left text-2xl font-bold tracking-tight sm:text-2xl lg:text-4xl ">
                  <span className="block text-black">
                    Build your portfolio across Web3, Crypto, and Blockchain
                    startups
                  </span>
                </h2>
                </div>
                <Subscribe/>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
