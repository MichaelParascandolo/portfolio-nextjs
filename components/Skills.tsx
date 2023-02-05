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
  const variants = {
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
    "Git",
    "Java",
  ];
  const familiar: string[] = ["SASS", "Python", "Firebase", "React Native"];
  // other skills: electron, jQuery, GitHub
  const styles = {
    grid: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8", // gap 8 or 4
    grid2: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8", // gap 8 or 4...
  };
  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Skills</p>
        <h2 className="py-4 dark:text-white">Experienced With</h2>
        <motion.div variants={variants} initial="hidden" animate={controls}>
          <div className={styles.grid} ref={ref}>
            {experienced.map((item, index) => (
              <SkillItem name={item} key={index} />
            ))}
          </div>
        </motion.div>
        <h2 className="py-4 mt-5 dark:text-white">Some Experience With</h2>
        <motion.div variants={variants} initial="hidden" animate={controls}>
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
