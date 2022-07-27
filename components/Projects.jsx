import React from "react";
import surfcitypizzaImg from "../public/assets/projects/surfcitypizza2.jpg";
import weatherImg from "/public/assets/projects/weather.jpg";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Surf City Pizza"
            backgroundImg={surfcitypizzaImg}
            projectUrl="/surfcitypizza"
            tech="React / React Router / Bootstrap"
          />
          <ProjectItem
            title="Weather"
            backgroundImg={weatherImg}
            projectUrl="/weather"
            tech="HTML / CSS / TypeScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
