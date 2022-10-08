import Image from "next/image";
import React from "react";
import Link from "next/link";
import gamesearchImg from "../public/assets/projects/gamesearch.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";

const surfcitypizza = () => {
  const style: { icon: string; color: string } = {
    icon: "text-gray-600 py-2 flex items-center dark:text-gray-300",
    color: "text-[#ee2d2d]",
  };
  return (
    <>
      <Navbar background={false} />
      <div className="w-full h-full dark:bg-[#1E1E1E]">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            layout="fill"
            objectFit="cover"
            src={gamesearchImg}
            alt="/"
            style={{ backgroundPosition: "top" }}
          />
          <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 uppercase">GameSearch</h2>
            <h3>React / Tailwind / TypeScript</h3>
          </div>
        </div>

        {/* <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8"> */}
        <div className="max-w-[90%] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className={style.color}>Project</p>
            <h2 className="dark:text-white">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This site was created because I wanted to do a project around
              something I am passionate about, which is video games! Users are
              able to search for video games by title name. The title, photo,
              release date, ESRB rating, metacritic score, and platform(s) of
              the game are displayed on cards organized in a grid. Users are
              shown the total number of results and are able to go back and
              forth through various pages to see more. This site was built using
              React JS, Tailwind, and TypeScript. Data is pulled from the RAWG
              API.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://zingy-kulfi-79f7c0.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-2 mt-4 mr-8 tracking-widest">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/MichaelParascandolo/game-search-react"
                target="_blank"
                rel="noreferrer"
              >
                <button className="px-8 py-2 mt-4 tracking-widest">
                  View Code
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 border-solid border-2 border-gray-200 dark:shadow-black dark:border-black">
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
                    <SiTailwindcss className="pr-2" size={25} /> Tailwind
                  </p>
                  <p className={style.icon}>
                    <SiTypescript className="pr-2" size={25} /> TypeScript
                  </p>
                  <p className={style.icon}>
                    <AiFillApi className="pr-2" size={25} /> RAWG API
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/#projects">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-[#282828] dark:shadow-black dark:border-black">
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
