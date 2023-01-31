import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillItem from "./SkillItem";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };
  const experienced: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
    "React JS",
    "Next JS",
  ];
  const familiar: string[] = [
    "SASS",
    "Github",
    "Python",
    "Java",
    "Firebase",
    "React Native",
  ];
  const skills: { title: string; experienced: boolean }[] = [
    { title: "HTML", experienced: true },
    { title: "HTML", experienced: true },
    { title: "CSS", experienced: true },
    { title: "JavaScript", experienced: true },
    { title: "TypeScript", experienced: true },
    { title: "Tailwind", experienced: true },
    { title: "Bootstrap", experienced: true },
    { title: "React JS", experienced: true },
    { title: "Next JS", experienced: true },
    { title: "SASS", experienced: false },
    { title: "Github", experienced: false },
    { title: "Python", experienced: false },
    { title: "Java", experienced: false },
    { title: "Firebase", experienced: false },
    { title: "React Native", experienced: false },
  ];
  // other skills: electron, jQuery
  const styles = {
    grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", // gap 8 or 4
    grid2: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8", // gap 8 or 4...
  };
  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Skills</p>
        <h2 className="py-4 dark:text-white">Experienced With</h2>
        <motion.div
          // ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <div className={styles.grid} ref={ref}>
            {experienced.map((item, index) => (
              <SkillItem name={item} key={index} />
            ))}
          </div>
        </motion.div>
        <h2 className="py-4 mt-5 dark:text-white">Some Experience With</h2>
        <motion.div
          // ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <div className={styles.grid2}>
            {familiar.map((item, index) => (
              <SkillItem name={item} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
