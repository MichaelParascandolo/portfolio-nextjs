import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import surfcitypizzaImg from "../public/assets/projects/devices/pizza-black.png";
import weatherImg from "/public/assets/projects/devices/weather-black.png";
import gamesearchImg from "/public/assets/projects/devices/game-white.png";
import portfolioImg from "/public/assets/projects/devices/portfolio-black.png";
import coffeeImg from "/public/assets/projects/devices/coffee-white.png";
import comingSoonImg from "/public/assets/projects/cover/comingsoon-small-2.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const projects: {
    title?: string;
    background: any;
    description?: string;
    projectUrl?: string;
    tech?: string;
  }[] = [
    {
      title: "CoolBeans",
      background: coffeeImg,
      description: "An Imaginary Café",
      projectUrl: "/projects/coolbeans",
      tech: "Next JS | Tailwind | Firebase",
    },
    {
      title: "Surf City Pizza",
      background: surfcitypizzaImg,
      description: "The #1 Pizza In South Jersey",
      projectUrl: "/projects/surfcitypizza",
      tech: "React | React Router | Bootstrap",
    },
    {
      title: "Weather",
      background: weatherImg,
      description: "A Simple Weather Site",
      projectUrl: "/projects/weather",
      tech: "HTML | CSS | TypeScript",
    },
    {
      title: "GameSearch",
      background: gamesearchImg,
      description: "A Game Search Engine",
      projectUrl: "/projects/gamesearch",
      tech: "React | Tailwind | TypeScript",
    },
    {
      title: "Portfolio",
      background: portfolioImg,
      description: "My Personal Portfolio",
      projectUrl: "/projects/portfolio",
      tech: "Next JS | Tailwind | TypeScript",
    },
    {
      background: comingSoonImg,
    },
  ];
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
              y: 10,
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
          }}
        >
          {/* gap 8 or 10?...... */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectItem
                title={project.title}
                backgroundImg={project.background}
                description={project.description}
                projectUrl={project.projectUrl}
                tech={project.tech}
                key={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
