import React, { useEffect } from "react";
import surfcitypizzaImg from "../public/assets/projects/devices/pizza-black.png";
import weatherImg from "/public/assets/projects/devices/weather-black.png";
import gamesearchImg from "/public/assets/projects/devices/game-white.png";
import portfolioImg from "/public/assets/projects/devices/portfolio-black.png";
import coffeeImg from "/public/assets/projects/devices/coffee-white.png";
import comingSoonImg from "/public/assets/projects/cover/comingsoon-small-2.png";
// import surfcitypizzaImg from "../public/assets/projects/cover/surfcitypizza.png";
// import weatherImg from "/public/assets/projects/cover/weather.png";
// import gamesearchImg from "/public/assets/projects/cover/gamesearch.png";
// import portfolioImg from "/public/assets/projects/cover/portfolio.png";
// import coffeeImg from "/public/assets/projects/cover/coffee2.png";
// import comingSoonImg from "/public/assets/projects/cover/comingsoon.png";
// https://websitemockupgenerator.com
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
        <p className="text-xl tracking-widest uppercase text-primary">
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
          {/* gap 8 or 10?...... */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* showcase project */}
            <ProjectItem
              title="CoolBeans"
              backgroundImg={coffeeImg}
              description={"An Imaginary Café"}
              projectUrl="/projects/coolbeans"
              tech="Next JS | FireBase | Tailwind"
            />

            <ProjectItem
              title="Surf City Pizza"
              backgroundImg={surfcitypizzaImg}
              description="The #1 Pizza In South Jersey"
              projectUrl="/projects/surfcitypizza"
              tech="React | React Router | Bootstrap"
            />

            <ProjectItem
              title="Weather"
              backgroundImg={weatherImg}
              description="A Simple Weather Site"
              projectUrl="/projects/weather"
              tech="HTML | CSS | TypeScript"
            />

            <ProjectItem
              title="GameSearch"
              backgroundImg={gamesearchImg}
              description="A Game Search Engine"
              projectUrl="/projects/gamesearch"
              tech="React | Tailwind | TypeScript"
            />

            <ProjectItem
              title="Portfolio"
              backgroundImg={portfolioImg}
              description="My Personal Portfolio"
              projectUrl="/projects/portfolio"
              tech="Next JS | Tailwind | TypeScript "
            />

            <ProjectItem backgroundImg={comingSoonImg} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
