import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
const notFound = () => {
  return (
    <div id="home" className="w-full text-center">
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-[100px]">
          <h1 className="pb-4 text-gray-700 text-[70px]">
            🤔 <span className="text-[#ee2d2d]">Oops!</span>
          </h1>
          <h2 className="py-2 text-gray-700">
            We can't find the page you're looking for.
          </h2>
          <h3 className="py-2 text-gray-700">
            Here is a picture of Bear instead! ❤️
          </h3>
          <div className="h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 max-w-[80%]">
            <Image
              src="/../public/me/Bear.jpeg"
              alt="/"
              width="756"
              height="1008"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default notFound;
