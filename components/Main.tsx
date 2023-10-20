import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Socials from "./Socials";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import memoji from "public/assets/me/portfolio_memoji.png";

const Main = () => {
  const [quote, setQuote] = useState<string>("");

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
            <motion.div
              whileHover={animate.hover}
              className="flex justify-center"
            >
              <Image
                src={memoji}
                alt="Michael's Emoji"
                width="250"
                height="250"
                draggable={false}
              />
            </motion.div>
            <h1 className="pb-4 text-gray-700 tracking-wide dark:text-gray-200">
              <Typewriter
                options={{
                  cursor: "",
                  // loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("Hello,")
                    .pauseFor(300)
                    .typeString(
                      ' I&apos;m <span style="color: #ee2d2d;">Michael</span>'
                    )
                    .pauseFor(1000)
                    .typeString(
                      '<br/>a <span style="color: #ee2d2d;">Full-Stack</span> Developer.'
                    )
                    .start();
                }}
              />
            </h1>
            <div className={"flex justify-center"}>
              <Link href="/#projects">
                <span className="border-b-2 uppercase flex text-gray-600 dark:text-gray-300 cursor-pointer border-transparent tracking-widest font-semibold hover:border-primary ease-in duration-200">
                  Latest Projects
                  <FiArrowRight size={20} className={"my-auto"} />
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
              <Socials size={25} circles={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
