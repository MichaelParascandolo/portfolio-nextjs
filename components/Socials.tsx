import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = ({ size, circles }: { size: number; circles: boolean }) => {
  const style: { circle: string; color: string } = {
    circle:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer border-solid border-2 border-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black",
    color: "#ee2d2d",
  };
  const circleHover = {
    scale: 1.15,
    transition: {
      duration: 0.2,
    },
  };
  return (
    <>
      <motion.div whileHover={circleHover}>
        <a
          href="https://www.linkedin.com/in/michael-parascandolo-774725226/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? style.circle : ""}>
            <FaLinkedinIn color={style.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover}>
        <a
          href="https://github.com/michaelparascandolo"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? style.circle : ""}>
            <FaGithub color={style.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover}>
        <a
          href="https://twitter.com/mikejpara"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? style.circle : ""}>
            <FaTwitter color={style.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover}>
        <a
          href="https://www.instagram.com/mikejpara/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? style.circle : ""}>
            <FaInstagram color={style.color} size={size} />
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default Socials;
