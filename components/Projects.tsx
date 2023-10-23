import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import comingSoonImg from "/public/assets/projects/comingsoon.png";
import ProjectItem from "./ProjectItem";
import projectData from "../public/data/projects.json";
import InfoButton from "./InfoButton";

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
    <div
      id="projects"
      className="w-full min-h-screen scroll-mt-8 dark:bg-[#1E1E1E]"
    >
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
          {/* Display each project */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
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
        <InfoButton text={"about this site"} link={"/portfolio"} />
      </div>
    </div>
  );
};

export default Projects;
