import React, { useEffect } from "react";
import surfcitypizzaImg from "../public/assets/projects/cover/surfcitypizza.png";
import weatherImg from "/public/assets/projects/cover/weather.png";
import gamesearchImg from "/public/assets/projects/cover/gamesearch.png";
import portfolioImg from "/public/assets/projects/cover/portfolio.png";
import ProjectItem from "./ProjectItem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="projects" className="w-full dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Projects
        </p>
        <h2 className="py-4 dark:text-white">What I&apos;ve Built</h2>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectItem
              title="Surf City Pizza"
              backgroundImg={surfcitypizzaImg}
              projectUrl="/surfcitypizza"
              tech="React / React Router / Bootstrap"
            />

            <ProjectItem
              title="Weather"
              backgroundImg={weatherImg}
              projectUrl="/weather"
              tech="HTML / CSS / TypeScript"
            />

            <ProjectItem
              title="GameSearch"
              backgroundImg={gamesearchImg}
              projectUrl="/gamesearch"
              tech="React / Tailwind / TypeScript"
            />

            <ProjectItem
              title="Portfolio"
              backgroundImg={portfolioImg}
              projectUrl="/portfolio"
              tech="Next JS / Tailwind / TypeScript "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
