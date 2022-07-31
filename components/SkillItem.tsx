import React, { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const SkillItem = ({ name }: { name: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      {/* maybe p-6 instead? */}
      <motion.div
        className="card"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            scale: 1,
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
        whileHover={{
          position: "relative",
          zIndex: 1,

          scale: [1, 1.2, 1.1],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: 0.3,
          },
        }}
      >
        <div className="p-3 shadow-xl shadow-gray-400 rounded-xl">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={"/../public/assets/skills/" + name + ".png"}
                width="64"
                height="64"
                alt="/"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SkillItem;
