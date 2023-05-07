import { AiFillApi } from "react-icons/ai";
import { SiAngular, SiCss3, SiHtml5 } from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import weatherImg from "../../public/assets/projects/weather.png";

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
        icon1={<SiAngular className="mx-2" size={25} />}
        icon1Text="Angular"
        icon2={<SiHtml5 className="mx-2" size={25} />}
        icon2Text="HTML5"
        icon3={<SiCss3 className="mx-2" size={25} />}
        icon3Text="CSS3"
        icon4={<AiFillApi className="mx-2" size={25} />}
        icon4Text="OpenWeather API"
      />
    </>
  );
};

export default weather;
