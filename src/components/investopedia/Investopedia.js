import React from "react";

import investopedia from "../../assets/images/investopedia.png";

function Investopedia() {
  return (
    <div id="Investopedia">
      <div className="relative bg-black pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-green-700 sm:text-4xl">
                    Web3pedia:
                    <br />
                    The Encyclopedia for ALL things Web3
                  </h2>
                  <p className="mt-4 text-lg text-white">
                    Vine’s Web3pedia is a pre-launch Work In Progress (WIP). It
                    will be a place to due your own due diligence and learn from
                    the best information gatherers around the world. With every
                    contribution you can earn cryptocurrency rewards and receive
                    carry in companies that the community invests in. For a
                    sneak peak, below is the link. We are pushing updates
                    regularly as our community continues to add improvements
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={investopedia}
                  alt="Investopedia"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investopedia;
