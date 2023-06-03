import { SiBootstrap, SiReact, SiTypescript } from "react-icons/si";
import ProjectTemplate, {
  IconData,
  iconSize,
} from "../../components/ProjectTemplate";
import surfcitypizzaImg from "../../public/assets/projects/surfcitypizza.jpg";

const icons: IconData[] = [
  {
    icon: <SiReact className="mx-2" size={iconSize} />,
    name: "React JS",
  },
  {
    icon: <SiReact className="mx-2" size={iconSize} />,
    name: "React Router",
  },
  {
    icon: <SiTypescript className="mx-2" size={iconSize} />,
    name: "TypeScript",
  },
  {
    icon: <SiBootstrap className="mx-2" size={iconSize} />,
    name: "Bootstrap 5",
  },
];
const description =
  "This site was created for the #1 pizzeria in South Jersey, Surf City Pizza. Users are able to see the restaurant's entire menu as well as their basic info such as phone number, address, etc. The site is fully mobile responsive and is built using React JS. React Router Dom is used to route users to different pages such as the menu, about, and home. This was my first project to utilize Bootstrap for a clean and cohesive design.";
const surfcitypizza = () => {
  return (
    <>
      <ProjectTemplate
        name="surfcitypizza.com"
        tech="React JS / React Router / Bootstrap"
        description={description}
        img={surfcitypizzaImg}
        live="https://surfcitypizza.com"
        code="https://github.com/MichaelParascandolo/surf-city-pizza"
        icons={icons}
      />
    </>
  );
};

export default surfcitypizza;
