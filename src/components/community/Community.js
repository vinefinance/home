import React from "react";
import crowd from '../../assets/images/crowd.jpeg';
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
function Community() {
  return (
    <div id="Community">
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-2">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={crowd}
              alt="crowd"
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-700 sm:text-4xl">
                The Community
              </h3>
              <p className="mt-8 text-lg text-gray-500">
              Vine is a global crypto ecosystem community of investors, founders , developers, and technologist who believe in the promise that Web3 can build global bridges.  It's hard to find relevant factual information about private companies in our own back yard, let alone around the world. Our ethos is one of information based due-diligence sharing. We, as a global collective, are eager to let the facts about crypto companies speak for themselves. Investor can harness the power of open source due-diligence to find and invest in companies that are building innovative bridges between Web2 and Web3 technology.
              </p>

              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Community;
