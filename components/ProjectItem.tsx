import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const ProjectItem = ({
  title,
  backgroundImg,
  description,
  tech,
  projectUrl,
}: {
  title: string;
  backgroundImg: any;
  description: string;
  tech: string;
  projectUrl: string;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-0 group border-solid border-2 border-gray-200 hover:bg-gradient-to-r from-[#f26969] to-[#ee2d2d] dark:bg-[#282828] dark:shadow-black dark:border-black">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          draggable={false}
          alt={title}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/* <div className="text-center">
            <span className="font-logoMP text-black text-4xl select-none">
              MP
            </span>
          </div> */}
          <h3 className="text-4xl text-gray-900 tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-0 pt-2 text-gray-900 text-center font-bold text-lg tracking-wide">
            {description}
          </p>
          <p className="pb-4 pt-2 text-gray-900 text-center tracking-wide">
            {tech}
          </p>
          <Link href={projectUrl}>
            {/* maybe add a shadow to the button? */}
            <p className="text-center py-3 rounded-lg bg-white/30 text-black font-bold text-lg cursor-pointer tracking-widest border-gray-900 border-2">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
