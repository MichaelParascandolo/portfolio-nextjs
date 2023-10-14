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
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
    "React JS",
    "Next JS",
    "Git",
    "Python",
    "Flask",
    "Java",
    "Angular",
    "SQL",
    "PHP",
    "Laravel",
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Skills</p>
        <h2 className="py-4 dark:text-white">Proficient Technologies</h2>
        <motion.div variants={variants} initial="hidden" animate={controls}>
          <div
            className={"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8"} // Smaller gap maybe?
            ref={ref}
          >
            {skills.map((item, index) => (
              <SkillItem name={item} key={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
