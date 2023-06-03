import {
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProjectTemplate, {
  IconData,
  iconSize,
} from "../../components/ProjectTemplate";
import portfolioImg from "../../public/assets/projects/portfolio.png";

const icons: IconData[] = [
  {
    icon: <SiNextdotjs className="mx-2" size={iconSize} />,
    name: "Next JS",
  },
  {
    icon: <SiTailwindcss className="mx-2" size={iconSize} />,
    name: "Tailwind",
  },
  {
    icon: <SiTypescript className="mx-2" size={iconSize} />,
    name: "TypeScript",
  },
  {
    icon: <SiFramer className="mx-2" size={iconSize} />,
    name: "Framer Motion",
  },
];
const description =
  "For this site, I wanted to learn and use a new framework, and I chose NextJS. Tailwind was used to help easily create a clean and cohesive design. TypeScript was added to create a more reliable codebase. Framer-motion was used to create all of the nice transitions and hover effects that you see on the site. EmailJS handles the contact form and makes it functional. Out of all my projects, this is by far the one I am most proud of as it fully expresses the love I have for creating amazing experiences on the web.";
const portfolio = () => {
  return (
    <>
      <ProjectTemplate
        name="Portfolio"
        tech="Next JS / Tailwind / TypeScript"
        description={description}
        img={portfolioImg}
        code="https://github.com/MichaelParascandolo/portfolio-nextjs"
        icons={icons}
      />
    </>
  );
};

export default portfolio;
