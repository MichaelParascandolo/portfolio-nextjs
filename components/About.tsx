/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const style: { p: string } = {
    p: "py-2 text-gray-600",
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#ee2d2d]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 tracking-widest">
            // I Love Tech ❤️
          </p>
          <p className={style.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dolore at nam totam cumque, facere, minima quia velit labore alias
            perferendis, magnam non ullam voluptatum!
          </p>
          <p className={style.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dolore at nam totam cumque, facere, minima quia velit labore alias
            perferendis, magnam non ullam voluptatum!
          </p>
          <p className={style.p}>
            Check out some of my latest{" "}
            <Link href="/#projects">
              <span className="text-[#ee2d2d] cursor-pointer">projects</span>
            </Link>
            !
          </p>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
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
          <motion.div
            whileHover={{
              position: "relative",
              zIndex: 1,
              scale: [1, 1.2, 1],
              rotate: [0, 1, -1, 0],
              transition: {
                duration: 0.5,
              },
            }}
          >
            <div className="max-w-[90%] h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 border-solid border-2 border-gray-200">
              <Image
                src="/../public/assets/me/Me.jpeg"
                alt="/"
                width="579"
                height="772"
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
