import React from "react";
import { SiBootstrap, SiReact, SiTypescript } from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import surfcitypizzaImg from "../../public/assets/projects/surfcitypizza.jpg";

const surfcitypizza = () => {
  const description =
    "This site was created for the #1 pizzeria in South Jersey, Surf City Pizza. Users are able to see the restaurant's entire menu as well as their basic info such as phone number, address, etc. The site is fully mobile responsive and is built using React JS. React Router Dom is used to route users to different pages such as the menu, about, and home. This was my first project to utilize Bootstrap for a clean and cohesive design.";
  return (
    <>
      <ProjectTemplate
        name="surfcitypizza.com"
        tech="React JS / React Router / Bootstrap"
        description={description}
        img={surfcitypizzaImg}
        live="https://surfcitypizza.com"
        code="https://github.com/MichaelParascandolo/surf-city-pizza"
        icon1={<SiReact className="mx-2" size={25} />}
        icon1Text="React JS"
        icon2={<SiReact className="mx-2" size={25} />}
        icon2Text="React Router"
        icon3={<SiTypescript className="mx-2" size={25} />}
        icon3Text="TypeScript"
        icon4={<SiBootstrap className="mx-2" size={25} />}
        icon4Text="Bootstrap 5"
      />
    </>
  );
};

export default surfcitypizza;
