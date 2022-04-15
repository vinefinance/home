import React from "react";

function Subscribe() {
  return (
    <div className="inset-y-0 left-0">
      <div className=" relative py-16  sm:py-24 lg:py-32">
        <form 
        className="mt-8  flex sm:w-full md:w-1/2 lg:w-1/3"
        action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="29119bf1-32ed-45d9-9a52-a51c14aecc65"/>
          <input
            className="text-center border  border-gray-100 w-full px-4 py-2 text-gray-900"
            placeholder="Enter Your Email Here"
            type="email"
            required
          />
          <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
          <button
            type="submit"
            className="inline-block bg-green-700 py-1 px-4 border border-transparent text-base font-medium text-white hover:bg-opacity-75"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
