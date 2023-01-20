import React from "react";
import { AiFillApi } from "react-icons/ai";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import gamesearchImg from "../../public/assets/projects/gamesearch.png";

const description =
  "This site was created because I wanted to do a project around something I am passionate about, which is video games! Users are able to search for video games by title name. The title, photo, release date, ESRB rating, metacritic score, and platform(s) of the game are displayed on cards organized in a grid. Users are shown the total number of results and are able to go back and forth through various pages to see more. This site was built using React JS, Tailwind, and TypeScript. Data is pulled from the RAWG API.";
const gamesearch = () => {
  return (
    <>
      <ProjectTemplate
        name="GameSearch"
        tech="React / Tailwind / TypeScript"
        description={description}
        img={gamesearchImg}
        live="https://game-search-react.vercel.app"
        code="https://github.com/MichaelParascandolo/game-search-react"
        icon1={<SiReact className="mx-2" size={25} />}
        icon1Text="React JS"
        icon2={<SiTailwindcss className="mx-2" size={25} />}
        icon2Text="Tailwind"
        icon3={<SiTypescript className="mx-2" size={25} />}
        icon3Text="TypeScript"
        icon4={<AiFillApi className="mx-2" size={25} />}
        icon4Text="RAWG API"
      />
    </>
  );
};

export default gamesearch;
