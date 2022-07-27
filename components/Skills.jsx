import React from "react";
import SkillItem from "./SkillItem";
const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Skills
        </p>
        <h2 className="py-4">Experienced With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem name="HTML" />
          <SkillItem name="CSS" />
          <SkillItem name="JavaScript" />
          <SkillItem name="TypeScript" />
          <SkillItem name="Tailwind" />
          <SkillItem name="Bootstrap" />
          <SkillItem name="React" image="/../public/assets/skills/react.png" />
          {/* <SkillItem name="jQuery" /> */}
          <SkillItem name="NextJS" />
        </div>
        {/* some experience */}
        <h2 className="py-4 mt-5">Some Experience With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem name="SASS" image="/../public/assets/skills/sass.png" />
          <SkillItem name="Github" />
          <SkillItem name="Electron" />
          <SkillItem name="Firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
