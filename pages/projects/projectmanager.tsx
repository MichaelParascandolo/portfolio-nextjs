import { SiReact, SiFlask, SiTailwindcss, SiSqlite } from "react-icons/si";
import ProjectTemplate, { IconData } from "../../components/ProjectTemplate";
import projectManagerImg from "../../public/assets/projects/projectmanager.png";

const icons: IconData[] = [
  {
    icon: <SiReact className="mx-2" size={25} />,
    name: "React JS",
  },
  {
    icon: <SiTailwindcss className="mx-2" size={25} />,
    name: "Tailwind",
  },
  {
    icon: <SiFlask className="mx-2" size={25} />,
    name: "Flask",
  },
  {
    icon: <SiSqlite className="mx-2" size={25} />,
    name: "Sqlite",
  },
];
const description =
  "This full-stack web application was developed as a group project for Quality Electric Services during my college studies. The application serves as an internal tool for the company’s employees, providing an easy way to schedule jobs and manage customer records. Its features include user creation and management, customizable user permissions, client creation, job scheduling, and customer history viewing. The application was built using React JS and Tailwind for the front-end, Flask for the back-end, and Sqlite for data storage. While the project is not currently hosted, screenshots of the application can be found in the GitHub repository linked below.";
const projectmanager = () => {
  return (
    <>
      <ProjectTemplate
        name="Project Manager"
        tech="React / Flask / Tailwind / Sqlite"
        description={description}
        img={projectManagerImg}
        code="https://github.com/MichaelParascandolo/project-manager-react-flask"
        icons={icons}
      />
    </>
  );
};

export default projectmanager;
