import Image from "next/image";
import React from "react";
import Link from "next/link";
import portfolioImg from "../public/assets/projects/portfolio.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

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
            layout="fill"
            objectFit="cover"
            src={portfolioImg}
            alt="/"
            style={{ backgroundPosition: "top" }}
          />
          <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 uppercase">Portfolio</h2>
            <h3>Next JS / Tailwind / TypeScript</h3>
          </div>
        </div>

        {/* <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8"> */}
        <div className="max-w-[90%] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className={style.color}>Project</p>
            <h2 className="dark:text-white">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is my personal portfolio! Users are able to learn about me,
              what I am passionate about, the technology I have worked with, see
              my projects, and get in contact with me. For this site, I wanted
              to learn and use a new framework, and I chose NextJS. Tailwind was
              used to help easily create a clean and cohesive design. TypeScript
              was added to create a more reliable codebase. Framer-motion was
              used to create all of the nice transitions and hover effects that
              you see on the site. EmailJS handles the contact form and makes it
              functional. Out of all my projects, this is by far the one I am
              most proud of as it fully expresses the love I have for creating
              amazing experiences on the web.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://github.com/MichaelParascandolo/portfolio-nextjs"
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
                    <SiNextdotjs className="pr-2" size={25} /> Next JS
                  </p>
                  <p className={style.icon}>
                    <SiTailwindcss className="pr-2" size={25} /> Tailwind
                  </p>
                  <p className={style.icon}>
                    <SiTypescript className="pr-2" size={25} /> TypeScript
                  </p>
                  <p className={style.icon}>
                    <SiFramer className="pr-2" size={25} /> Framer Motion
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
