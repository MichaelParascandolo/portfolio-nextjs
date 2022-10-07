import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  const style: { grid: string } = {
    grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
  };
  return (
    <div id="skills" className="w-full lg:h-screen p-2 dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Skills
        </p>
        <h2 className="py-4 dark:text-white">Experienced With</h2>
        <div className={style.grid}>
          <SkillItem name="HTML" />
          <SkillItem name="CSS" />
          <SkillItem name="JavaScript" />
          <SkillItem name="TypeScript" />
          <SkillItem name="Tailwind" />
          <SkillItem name="Bootstrap" />
          {/* <SkillItem name="jQuery" /> */}
          <SkillItem name="React" />
          <SkillItem name="NextJS" />
        </div>
        <h2 className="py-4 mt-5 dark:text-white">Some Experience With</h2>
        <div className={style.grid}>
          <SkillItem name="SASS" />
          <SkillItem name="Github" />
          <SkillItem name="Electron" />
          <SkillItem name="Firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
