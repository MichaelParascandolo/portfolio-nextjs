import React, { useEffect, useState } from "react";
import Image from "next/image";
import Socials from "./Socials";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Main = () => {
  const quotes: string[] = [
    "“Innovation distinguishes between a leader and a follower.” - Steve Jobs",
    "“Your time is limited, so don't waste it living someone else's life.” - Steve Jobs",
    "“Don’t let the noise of others’ opinions drown out your own inner voice.” - Steve Jobs",
    "“You can’t connect the dots looking forward; you can only connect them looking backwards.” - Steve Jobs",
    "“Stay hungry. Stay foolish.” - Steve Jobs",
    "“We’re here to put a dent in the universe. Otherwise why else even be here?” - Steve Jobs",
    "“Have the courage to follow your heart and intuition.” - Steve Jobs",
  ];
  const [quote, setQuote] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const setRandom = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setPicture(`/assets/me/memoji${Math.floor(Math.random() * 4)}.png`);
  };
  useEffect(() => {
    setRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="home" className="w-full text-center md:h-screen dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.7,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <div className="mt-20">
            <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
              {quote}
            </p>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                src={picture}
                alt="Michael's Emoji"
                width="250"
                height="250"
                draggable={false}
              />
            </motion.div>
            <h1 className="pb-4 text-gray-700 dark:text-gray-200">
              Hello👋, I'm{" "}
              {/* <span className="bg-gradient-to-r from-[#f26969] to-[#ee2d2d] text-transparent bg-clip-text"> */}
              <span className="text-[#ee2d2d]">Michael</span>
            </h1>
            <h1 className="py-2 text-gray-700 dark:text-gray-200">
              <Typewriter
                options={
                  {
                    // cursor: "",
                    // loop: true,
                  }
                }
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("A Front-End Web Developer")
                    .start();
                  // .pauseFor(1000);
                  // .deleteAll()
                  // .typeString("An Aspiring Full-Stack Developer");
                }}
              />
            </h1>
            {/* <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1> */}
            <p className="py-4 text-gray-600 max-w-[80%] m-auto dark:text-gray-300">
              I'm a front-end web developer specializing in building and
              designing exception digital experiences. I'm focused on building
              responsive front-end web applications using modern technologies.
            </p>
            <Link href="/#projects">
              <div className={"flex justify-center"}>
                <span className="border-b-2 text-[#ee2d2d] cursor-pointer flex border-transparent tracking-widest font-semibold hover:border-black hover:px-2 dark:hover:border-white ease-in duration-200">
                  Latest Projects{" "}
                  <FiArrowRight size={20} className={"mt-[3px]"} />
                </span>
              </div>
            </Link>
            <div className="flex items-center justify-between max-w-[430px] m-auto py-4">
              <Socials size={23} circles={true} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
