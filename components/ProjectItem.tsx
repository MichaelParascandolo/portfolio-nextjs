import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ProjectItemData {
  title?: string;
  backgroundImg: StaticImageData;
  description?: string;
  tech?: string;
  projectUrl?: string;
}

const ProjectItem = ({
  title,
  projectUrl,
  description,
  tech,
  backgroundImg,
}: ProjectItemData) => {
  const styles = {
    containerHover:
      "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-0 group border-solid border-2 border-gray-200 hover:bg-gradient-to-t from-primary/20 to-primary dark:bg-[#282828] dark:shadow-black dark:border-black",
    container:
      "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-0 border-solid border-2 border-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black",
  };
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.05],
        transition: {
          duration: 0.3,
        },
      }}
      whileTap={{
        scale: [1.05, 1, 0.9],
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div className={projectUrl ? styles.containerHover : styles.container}>
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          draggable={false}
          alt={title}
        />
        <div className="hidden group-hover:block w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-xl md:text-4xl font-medium text-white tracking-wide text-center">
            {title}
          </h3>
          {/* <p className="text-[12px] text-gray-100  text-center md:text-lg tracking-wide">
            {description}
          </p> */}
          <p className="mb-2 text-[10px] text-white font-thin text-sm md:text-[15px] text-center tracking-widest">
            {tech}
          </p>
          {/* make this a button */}
          {projectUrl ? (
            <div className="flex justify-center">
              <Link href={projectUrl}>
                <button className="text-center p-2 text-sm md:text-lg cursor-pointer w-[250px] tracking-widest shadow-lg shadow-black/80 border-black border-2 hover:scale-105 ease-in-out duration-300 transition-all">
                  More Info
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
