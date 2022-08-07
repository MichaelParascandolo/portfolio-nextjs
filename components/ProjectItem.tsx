import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}: {
  title: string;
  backgroundImg: any;
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
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-0 group border-solid border-2 border-gray-200 hover:bg-gradient-to-r from-[#f26969] to-[#ee2d2d] dark:shadow-gray-900 dark:border-gray-800">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer tracking-widest">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
