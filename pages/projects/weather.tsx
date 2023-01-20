import React from "react";
import { AiFillApi } from "react-icons/ai";
import { SiCss3, SiHtml5, SiTypescript } from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import weatherImg from "../../public/assets/projects/weather.png";

const description =
  "This site was my first project to utilize an API. Users are able to see weather information such as temperature (celsius or fahrenheit), max/min temperature, humidity, wind speed, as well as a brief description of the current weather conditions. The icons are updated accordingly based on the weather conditions. Users are able to search via the name of a city, zip code, or even using your current location as determined by the browser. This site was built completely with vanilla HTML, CSS, and TypeScript. Data is pulled from the OpenWeather API.";
const weather = () => {
  return (
    <>
      <ProjectTemplate
        name="Weather"
        tech="HTML / CSS / TypeScript"
        description={description}
        img={weatherImg}
        live="https://weather-app-typescript-two.vercel.app"
        code="https://github.com/MichaelParascandolo/Weather-App-Typescript"
        icon1={<SiHtml5 className="mx-2" size={25} />}
        icon1Text="HTML5"
        icon2={<SiCss3 className="mx-2" size={25} />}
        icon2Text="CSS3"
        icon3={<SiTypescript className="mx-2" size={25} />}
        icon3Text="TypeScript"
        icon4={<AiFillApi className="mx-2" size={25} />}
        icon4Text="OpenWeather API"
      />
    </>
  );
};

export default weather;
