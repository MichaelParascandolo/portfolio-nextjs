import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Socials = ({ size, circles }: { size: number; circles: boolean }) => {
  const socialLinks: { icon: JSX.Element; link: string }[] = [
    {
      icon: <FaLinkedinIn className="text-primary" size={size} />,
      link: "https://www.linkedin.com/in/michael-parascandolo-774725226/",
    },
    {
      icon: <FaGithub className="text-primary" size={size} />,
      link: "https://github.com/michaelparascandolo",
    },
    {
      icon: <FaXTwitter className="text-primary" size={size} />,
      link: "https://x.com/mikejpara",
    },
    {
      icon: <FaInstagram className="text-primary" size={size} />,
      link: "https://www.instagram.com/mikejpara/",
    },
  ];
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
      {socialLinks.map((item, index) => (
        <motion.div whileHover={circleHover} whileTap={circleTap} key={index}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <div
              className={
                circles
                  ? "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer border-solid border-2 border-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black"
                  : null
              }
            >
              {item.icon}
            </div>
          </a>
        </motion.div>
      ))}
    </>
  );
};

export default Socials;
