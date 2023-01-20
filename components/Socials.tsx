import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = ({ size, circles }: { size: number; circles: boolean }) => {
  const styles = {
    circle:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer border-solid border-2 border-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black",
    color: "text-primary",
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
          <div className={circles ? styles.circle : ""}>
            <FaLinkedinIn color={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover}>
        <a
          href="https://github.com/michaelparascandolo"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : ""}>
            <FaGithub color={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover}>
        <a
          href="https://twitter.com/mikejpara"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : ""}>
            <FaTwitter color={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover}>
        <a
          href="https://www.instagram.com/mikejpara/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : ""}>
            <FaInstagram color={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default Socials;
