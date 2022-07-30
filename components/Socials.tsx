import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
const Socials = ({ size, circles }: { size: number; circles: boolean }) => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/michael-parascandolo-774725226/"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            circles
              ? "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              : "hover:scale-110 ease-in duration-300"
          }
        >
          <FaLinkedinIn color={"#ee2d2d"} size={size} />
        </div>
      </a>
      <a
        href="https://github.com/michaelparascandolo"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            circles
              ? "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              : "hover:scale-110 ease-in duration-300"
          }
        >
          <FaGithub color={"#ee2d2d"} size={size} />
        </div>
      </a>
      <a href="https://twitter.com/mikejpara" target="_blank" rel="noreferrer">
        <div
          className={
            circles
              ? "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              : "hover:scale-110 ease-in duration-300"
          }
        >
          <FaTwitter color={"#ee2d2d"} size={size} />
        </div>
      </a>
      <a
        href="https://www.instagram.com/mikejpara/"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            circles
              ? "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              : "hover:scale-110 ease-in duration-300"
          }
        >
          <FaInstagram color={"#ee2d2d"} size={size} />
        </div>
      </a>
    </>
  );
};

export default Socials;
