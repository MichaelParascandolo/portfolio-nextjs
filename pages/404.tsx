import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const notFound = () => {
  return (
    <>
      <Navbar background={true} />
      <div className="w-full text-center dark:bg-[#1E1E1E]">
        <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
          <div className="mt-[100px]">
            <h1 className="pb-4 text-gray-700 text-[70px]">
              🤔 <span className="text-[#ee2d2d]">Oops!</span>
            </h1>
            <h2 className="py-2 text-gray-700 dark:text-white">
              We can't find the page you're looking for.
            </h2>
            <h3 className="py-2 text-gray-700 dark:text-white">
              Here is a picture of Bear instead! ❤️
            </h3>
            <div className="flex justify-center py-5">
              <Link href="/#home">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-[#282828] dark:shadow-black dark:border-black">
                  <AiFillHome size={30} className="text-[#ee2d2d]" />
                </div>
              </Link>
            </div>
            <div className="h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 max-w-[80%] dark:bg-[#282828] dark:shadow-black dark:border-black">
              <Image
                src="/assets/me/Bear.jpeg"
                alt="/"
                width="756"
                height="1008"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <Footer />
        <div className="h-[20px]" />
      </div>
    </>
  );
};

export default notFound;
