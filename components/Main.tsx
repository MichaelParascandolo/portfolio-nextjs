import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import Socials from "./Socials";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Main = () => {
  const [quote, setQuote] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  useEffect(() => {
    const quotes: string[] = [
      "“Innovation distinguishes between a leader and a follower.” - Steve Jobs",
      "“Your time is limited, so don't waste it living someone else's life.” - Steve Jobs",
      "“Don’t let the noise of others’ opinions drown out your own inner voice.” - Steve Jobs",
      "“You can’t connect the dots looking forward; you can only connect them looking backwards.” - Steve Jobs",
      "“Stay hungry. Stay foolish.” - Steve Jobs",
      "“We’re here to put a dent in the universe. Otherwise why else even be here?” - Steve Jobs",
      "“Have the courage to follow your heart and intuition.” - Steve Jobs",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setPicture(`/assets/me/memoji${Math.floor(Math.random() * 4)}.png`);
  }, []);
  const animate = {
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
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div id="home" className="w-full text-center md:h-screen dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-20">
          <motion.div initial="hidden" animate="visible" variants={animate}>
            <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
              {quote}
            </p>
            <motion.div whileHover={animate.hover}>
              <Image
                src={picture}
                alt="Michael's Emoji"
                width="250"
                height="250"
                draggable={false}
              />
            </motion.div>
            {/*<h1 className="pb-2 text-gray-700 tracking-wide dark:text-gray-200">
              Hello👋, I'm {/* move the hand to the other side of hello? */}
            {/* <span className="bg-gradient-to-r from-[#f26969] to-primary text-transparent bg-clip-text"> */}
            {/* <span className="text-primary">Michael</span>
            </h1>  */}
            <h1 className="pb-1 text-gray-700 tracking-wide dark:text-gray-200">
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
                    .typeString("Hello,")
                    .pauseFor(500)
                    .typeString(
                      ' I&apos;m <span style="color: #ee2d2d;">Michael</span>'
                    )
                    .pauseFor(1000)
                    .typeString(
                      '<br/>A <span style="color: #ee2d2d;">Front-End</span> Developer'
                    )
                    .start();
                }}
              />
            </h1>
            {/* <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1> */}
            <p className="pt-4 text-gray-600 dark:text-gray-300">
              I am a front-end developer, but am always looking to learn new
              technologies and expand my skill set.
            </p>
            <p className="pb-4 text-gray-600 dark:text-gray-300">
              My goal is to deliver high-quality, responsive designs that
              provide an optimal user experience.
            </p>

            <div className={"flex justify-center"}>
              <Link href="/#projects">
                <span className="border-b-2 text-primary cursor-pointer flex border-transparent tracking-widest font-semibold hover:border-black dark:hover:border-white ease-in duration-200">
                  Latest Projects{" "}
                  <FiArrowRight size={20} className={"mt-[3px]"} />
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 50,
            }}
          >
            <div className="flex items-center justify-between max-w-[430px] m-auto py-4">
              <Socials size={23} circles={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
