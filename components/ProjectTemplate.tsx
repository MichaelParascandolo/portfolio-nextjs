import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const iconSize: number = 25;

export interface IconData {
  icon: JSX.Element;
  name: string;
}

interface ProjectData {
  name: string;
  tech: string;
  description: string;
  img: StaticImageData;
  live?: string;
  code: string;
  icons: IconData[];
}

const ProjectTemplate = ({
  name,
  tech,
  description,
  img,
  live,
  code,
  icons,
}: ProjectData) => {
  return (
    <>
      <Navbar background={false} />
      <div className="w-full h-full dark:bg-[#1E1E1E]">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image fill={true} src={img} alt={name} className="object-cover" />
          <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 uppercase">{name}</h2>
            <h3>{tech}</h3>
          </div>
        </div>
        <div className="max-w-[90%] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className="text-primary">Project</p>
            <h2 className="dark:text-white mb-2">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
            <div className="flex justify-center md:justify-start">
              {live ? (
                <a href={live} target="_blank" rel="noreferrer">
                  <button className="px-8 py-2 mt-4 mr-8 tracking-widest">
                    Live Site
                  </button>
                </a>
              ) : null}
              <a href={code} target="_blank" rel="noreferrer">
                <button className="px-8 py-2 mt-4 tracking-widest">
                  View Code
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 border-solid border-2 border-gray-200 dark:shadow-black dark:border-black">
            <div className="p-2">
              <p className="text-center font-bold pb-2 tracking-widest dark:text-white">
                Technologies
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="grid grid-cols-2 md:grid-cols-1">
                  {icons.map((item, index) => (
                    <p
                      className="text-gray-600 py-2 flex items-center dark:text-gray-300"
                      key={index}
                    >
                      {item.icon}
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/#projects">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-[#282828] dark:shadow-black dark:border-black">
              <HiOutlineChevronDoubleLeft size={30} className="text-primary" />
            </div>
          </Link>
        </div>
        <Footer />
        <div className="h-[20px]" />
      </div>
    </>
  );
};

export default ProjectTemplate;
