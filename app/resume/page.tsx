import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import * as Icons from "react-icons/md";
import data from "../../public/data/resume.json";
import ActionButton from "../components/ActionButton";

const Resume = () => {
  const DynamicMdIcon = ({ iconName }: { iconName: string }) => {
    const IconComponent = Icons[iconName];
    return <IconComponent className="mr-2 mb-1 inline-flex" />;
  };

  return (
    <>
      <Navbar background={true} />
      <div className="w-full text-center dark:bg-[#1E1E1E]">
        <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
          <div className="mt-[100px] w-[80%]">
            {/* Basic Information */}
            <h1 className="py-2 text-gray-700 dark:text-gray-200 text-[45px] tracking-wide">
              Michael <br /> Parascandolo
            </h1>
            <p className="text-gray-700 dark:text-gray-300 tracking-wider text-sm">
              Little Egg Harbor, New Jersey
            </p>
            {/* Technical Skills */}
            <hr />
            <h3 className="text-gray-700 text-center text-3xl tracking-wide dark:text-gray-200">
              <span className="text-primary">
                <DynamicMdIcon iconName={data.skills.icon} />
              </span>
              Technical Skills
            </h3>
            <div className="md:w-[80%] mx-auto">
              {/* Each Skill */}
              {data.skills.info.map((skill, index) => (
                <span
                  className="text-gray-700 tracking-widest dark:text-gray-300 gap-8"
                  key={index}
                >
                  {skill}
                  {index !== data.skills.info.length - 1 && " | "}
                </span>
              ))}
            </div>
            <hr />
            {/* Each Section */}
            {data.sections.map((section, index) => (
              <div
                key={index}
                className="text-center md:text-left text-gray-700"
              >
                <h2 className="mt-5 tracking-wider dark:text-gray-200">
                  <span className="text-primary">
                    <DynamicMdIcon iconName={section.icon} />
                  </span>
                  {section.title}
                </h2>
                {/* Each School / Job */}
                {section.info.map((item, index) => (
                  <div key={index}>
                    <h3 className="mt-5 tracking-wider dark:text-gray-200">
                      <span className="text-primary">
                        {item.title ? item.title : item.school}
                      </span>
                      <span className="block md:inline">
                        <span className="hidden md:inline"> - </span>{" "}
                        {item.company ? item.company : item.location}
                      </span>
                    </h3>
                    <p className="text-sm font-semibold tracking-widest dark:text-white">
                      {item.start} - {item.end ? item.end : "CURRENT 😁"}
                    </p>
                    <ul className="text-left list-disc font-light">
                      {/* Each Description */}
                      {item.description.map((desc, index) => (
                        <li className="dark:text-gray-300" key={index}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <ActionButton link="/#" action="back" />
        <Footer />
      </div>
    </>
  );
};

export default Resume;
