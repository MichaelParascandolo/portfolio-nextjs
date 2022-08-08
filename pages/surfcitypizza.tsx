import Image from "next/image";
import React from "react";
import Link from "next/link";
import surfcitypizzaImg from "../public/assets/projects/surfcitypizza.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HiOutlineChevronDoubleLeft } from "react-icons/Hi";
import { SiTypescript, SiReact, SiBootstrap } from "react-icons/Si";

const surfcitypizza = () => {
  const style: { icon: string; color: string } = {
    icon: "text-gray-600 py-2 flex items-center dark:text-gray-300",
    color: "text-[#ee2d2d]",
  };
  return (
    <>
      <Navbar background={false} />
      <div className="w-full h-full dark:bg-slate-700">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={surfcitypizzaImg}
            alt="/"
          />
          <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 uppercase">surfcitypizza.com</h2>
            <h3>React JS / React Router / Bootstrap</h3>
          </div>
        </div>

        {/* <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8"> */}
        <div className="max-w-[90%] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className={style.color}>Project</p>
            <h2 className="dark:text-white">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This site was created for the #1 pizzeria in South Jersey, Surf
              City Pizza. Users are able to see the restaurant's entire menu as
              well as their basic info such as phone number, address, etc. The
              site is fully mobile responsive and is built using React JS. React
              Router Dom is used to route users to different pages such as the
              menu, about, and home. This was my first project to utilize
              Bootstrap for a clean and cohesive design.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://surfcitypizza.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-2 mt-4 mr-8 tracking-widest">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/MichaelParascandolo/surf-city-pizza"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-2 mt-4 tracking-widest">
                  View Code
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 border-solid border-2 border-gray-200 dark:shadow-gray-900 dark:border-gray-800">
            <div className="p-2">
              <p className="text-center font-bold pb-2 tracking-widest dark:text-white">
                Technologies
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="grid grid-cols-2 md:grid-cols-1">
                  <p className={style.icon}>
                    <SiReact className="pr-2" size={25} /> React JS
                  </p>
                  <p className={style.icon}>
                    <SiReact className="pr-2" size={25} /> React Router
                  </p>
                  <p className={style.icon}>
                    <SiTypescript className="pr-2" size={25} /> TypeScript
                  </p>
                  <p className={style.icon}>
                    <SiBootstrap className="pr-2" size={25} /> Bootstrap 5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/#projects">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-900 dark:border-gray-800">
              <HiOutlineChevronDoubleLeft size={30} className={style.color} />
            </div>
          </Link>
        </div>
        <Footer />
        <div className="h-[20px]" />
      </div>
    </>
  );
};

export default surfcitypizza;
