import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import coffeeImg from "../../public/assets/projects/cover/coffee.png";

const description =
  "I've always wanted to open my own coffee shop, maybe one day that will happen but for now I created a website for my imaginary café. The foundation of this project of this project was Next JS because of it's great features like a build in router and lazy image loading. All of the styling is done using Tailwind css as it makes it easy and quick to create a beautiful design. I wanted to get some practice in with Firebase so the site has some basic integration. All of the items on the menu are read from the Firebase database and then displayed on the page.";
const coolbeans = () => {
  return (
    <>
      <ProjectTemplate
        name="CoolBeans"
        tech="Next JS / Tailwind / FireBase"
        description={description}
        img={coffeeImg}
        live="https://coffeeshop-nextjs-rho.vercel.app"
        code="https://github.com/MichaelParascandolo/coffeeshop-nextjs"
        icon1={<SiNextdotjs className="mx-2" size={25} />}
        icon1Text="Next JS"
        icon2={<SiTailwindcss className="mx-2" size={25} />}
        icon2Text="Tailwind"
        icon3={<SiTypescript className="mx-2" size={25} />}
        icon3Text="TypeScript"
        icon4={<SiFirebase className="mx-2" size={25} />}
        icon4Text="Firebase"
      />
    </>
  );
};

export default coolbeans;
