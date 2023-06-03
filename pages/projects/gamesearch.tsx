import { AiFillApi } from "react-icons/ai";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import ProjectTemplate, {
  IconData,
  iconSize,
} from "../../components/ProjectTemplate";
import gamesearchImg from "../../public/assets/projects/gamesearch.png";

const icons: IconData[] = [
  {
    icon: <SiReact className="mx-2" size={iconSize} />,
    name: "React JS",
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
    icon: <AiFillApi className="mx-2" size={iconSize} />,
    name: "RAWG API",
  },
];
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
        icons={icons}
      />
    </>
  );
};

export default gamesearch;
