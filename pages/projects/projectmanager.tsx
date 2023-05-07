import { SiReact, SiFlask, SiTailwindcss, SiSqlite } from "react-icons/si";
import ProjectTemplate from "../../components/ProjectTemplate";
import projectManagerImg from "../../public/assets/projects/projectmanager.png";

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
        live={false}
        code="https://github.com/MichaelParascandolo/project-manager-react-flask"
        icon1={<SiReact className="mx-2" size={25} />}
        icon1Text="React JS"
        icon2={<SiTailwindcss className="mx-2" size={25} />}
        icon2Text="Tailwind"
        icon3={<SiFlask className="mx-2" size={25} />}
        icon3Text="Flask"
        icon4={<SiSqlite className="mx-2" size={25} />}
        icon4Text="Sqlite"
      />
    </>
  );
};

export default projectmanager;
