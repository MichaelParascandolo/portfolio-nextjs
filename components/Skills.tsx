import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
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
  // other skills: electron, jQuery
  const styles = {
    grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", // gap 8 or 4
    grid2: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8", // gap 8 or 4...
  };
  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Skills
        </p>
        <h2 className="py-4 dark:text-white">Experienced With</h2>
        <div className={styles.grid}>
          {experienced.map((item, index) => (
            <SkillItem name={item} key={index} />
          ))}
        </div>
        <h2 className="py-4 mt-5 dark:text-white">Some Experience With</h2>
        <div className={styles.grid2}>
          {familiar.map((item, index) => (
            <SkillItem name={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
