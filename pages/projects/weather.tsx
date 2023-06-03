import { AiFillApi } from "react-icons/ai";
import { SiAngular, SiCss3, SiHtml5 } from "react-icons/si";
import ProjectTemplate, {
  IconData,
  iconSize,
} from "../../components/ProjectTemplate";
import weatherImg from "../../public/assets/projects/weather.png";

const icons: IconData[] = [
  {
    icon: <SiAngular className="mx-2" size={iconSize} />,
    name: "Angular",
  },
  {
    icon: <SiHtml5 className="mx-2" size={iconSize} />,
    name: "HTML5",
  },
  {
    icon: <SiCss3 className="mx-2" size={iconSize} />,
    name: "CSS3",
  },
  {
    icon: <AiFillApi className="mx-2" size={iconSize} />,
    name: "OpenWeather API",
  },
];
const description =
  "This site was my first project built with Angular, and uses the OpenWeather API. Users are able to see weather information such as temperature (celsius or fahrenheit), max/min temperature, humidity, wind speed, as well as a brief description of the current weather conditions. Users are able to search via the name of a city, zip code, or their your current location.";
const weather = () => {
  return (
    <>
      <ProjectTemplate
        name="Weather"
        tech="HTML / CSS / TypeScript"
        description={description}
        img={weatherImg}
        live="https://weather-angular-six.vercel.app"
        code="https://github.com/MichaelParascandolo/weather-angular"
        icons={icons}
      />
    </>
  );
};

export default weather;
