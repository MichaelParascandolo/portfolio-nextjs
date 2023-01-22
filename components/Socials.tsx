import { motion } from "framer-motion";
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
  const circleTap = {
    scale: [1.15, 0.9, 1.15],
    transition: {
      duration: 0.4,
    },
  };
  return (
    <>
      <motion.div whileHover={circleHover} whileTap={circleTap}>
        <a
          href="https://www.linkedin.com/in/michael-parascandolo-774725226/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : null}>
            <FaLinkedinIn className={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover} whileTap={circleTap}>
        <a
          href="https://github.com/michaelparascandolo"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : null}>
            <FaGithub className={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover} whileTap={circleTap}>
        <a
          href="https://twitter.com/mikejpara"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : null}>
            <FaTwitter className={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
      <motion.div whileHover={circleHover} whileTap={circleTap}>
        <a
          href="https://www.instagram.com/mikejpara/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={circles ? styles.circle : null}>
            <FaInstagram className={styles.color} size={size} />
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default Socials;
