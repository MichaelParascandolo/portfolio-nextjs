import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ProjectItemData } from "./ProjectItem";
import surfcitypizzaImg from "../public/assets/projects/devices/pizza-black.png";
import weatherImg from "/public/assets/projects/devices/weather-black.png";
import gamesearchImg from "/public/assets/projects/devices/game-black.png";
import projectManagerImg from "/public/assets/projects/devices/project-black.png";
import coffeeImg from "/public/assets/projects/devices/coffee-black.png";
import comingSoonImg from "/public/assets/projects/comingsoon-small-white.png";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import projectData from "../public/projects.json";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

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
          variants={variants}
        >
          {/* gap 8 or 10?...... */}
          <div className="grid md:grid-cols-2 gap-10">
            {projectData.map((project, index) =>
              project.name !== "Portfolio" ? (
                <ProjectItem
                  title={project.name}
                  backgroundImg={project.thumbnail}
                  description={project.description}
                  projectUrl={project.slug}
                  tech={project.tech}
                  key={index}
                />
              ) : null
            )}
            {/* coming soon image */}
            <ProjectItem backgroundImg={comingSoonImg} />
          </div>
        </motion.div>
        <p className="text-gray-600 dark:text-gray-300 text-center text-lg tracking-widest mt-8">
          How is this site made?{" "}
          <Link
            href="/[slug]"
            as="/portfolio"
            className="text-primary cursor-pointer border-b-2 border-transparent hover:border-black dark:hover:border-white ease-in duration-200"
          >
            Learn More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
