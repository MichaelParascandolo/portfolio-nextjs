import Image from "next/image";
import React from "react";
import Link from "next/link";
import surfcitypizzaImg from "../public/assets/projects/surfcitypizza.jpg";
import { HiOutlineChevronDoubleLeft } from "react-icons/Hi";
import { SiTypescript, SiReact, SiBootstrap } from "react-icons/Si";
const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={surfcitypizzaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">surfcitypizza.com</h2>
          <h3>React JS / React Router / Bootstrap</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This site was created for the #1 pizzeria in south New Jersey, Surf
            City Pizza. Users are able to see the restaurant's entire menu as
            well as their basic info such as phone number, address, etc. The
            site is fully mobile responsive and is built using React JS. React
            Router Dom is also used to route users to different pages such as
            menu, about, and home. This was also my first project to utilize
            Bootstrap for a clean and cohesive design.
          </p>
          <a href="https://surfcitypizza.com" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </a>
          <a
            href="https://github.com/MichaelParascandolo/surf-city-pizza"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">View Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-[#ee2d2d]">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <SiReact className="pr-2" size={25} /> React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiReact className="pr-2" size={25} /> React Router
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiTypescript className="pr-2" size={25} /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <SiBootstrap className="pr-2" size={25} /> Bootstrap 5
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[64px] text-center align-center rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="/">
            <HiOutlineChevronDoubleLeft size={30} className="text-[#ee2d2d]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default property;
