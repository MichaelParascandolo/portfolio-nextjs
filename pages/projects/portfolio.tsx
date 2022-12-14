import React from "react";
import {
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import portfolioImg from "../../public/assets/projects/portfolio.png";

const description =
  "This is my personal portfolio! Users are able to learn about me, what I am passionate about, the technology I have worked with, see my projects, and get in contact with me. For this site, I wanted to learn and use a new framework, and I chose NextJS. Tailwind was used to help easily create a clean and cohesive design. TypeScript was added to create a more reliable codebase. Framer-motion was used to create all of the nice transitions and hover effects that you see on the site. EmailJS handles the contact form and makes it functional. Out of all my projects, this is by far the one I am most proud of as it fully expresses the love I have for creating amazing experiences on the web.";
const portfolio = () => {
  return (
    <>
      <ProjectTemplate
        name="Portfolio"
        tech="Next JS / Tailwind / TypeScript"
        description={description}
        img={portfolioImg}
        live={false}
        code="https://github.com/MichaelParascandolo/portfolio-nextjs"
        icon1={<SiNextdotjs className="pr-2" size={25} />}
        icon1Text="Next JS"
        icon2={<SiTailwindcss className="pr-2" size={25} />}
        icon2Text="Tailwind"
        icon3={<SiTypescript className="pr-2" size={25} />}
        icon3Text="TypeScript"
        icon4={<SiFramer className="pr-2" size={25} />}
        icon4Text="Framer Motion"
      />
    </>
  );
};

export default portfolio;
