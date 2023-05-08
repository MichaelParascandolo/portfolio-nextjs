import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemData {
  title?: string;
  backgroundImg: any;
  description?: string;
  tech?: string;
  projectUrl?: string;
}

const ProjectItem = (props: ProjectItemData) => {
  const styles = {
    containerHover:
      "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-0 group border-solid border-2 border-gray-200 hover:bg-gradient-to-r from-[#f26969] to-primary/70 dark:bg-[#282828] dark:shadow-black dark:border-black",
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
      <div
        className={props.projectUrl ? styles.containerHover : styles.container}
      >
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={props.backgroundImg}
          draggable={false}
          alt={props.title}
        />
        <div className="hidden group-hover:block w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-xl md:text-4xl text-gray-900 tracking-wide text-center">
            {props.title}
          </h3>
          <p className="text-[12px] text-gray-800 text-center font-semibold md:text-lg tracking-wide">
            {props.description}
          </p>
          <p className="mb-2 text-[10px] text-gray-800 text-sm md:text-[15px] text-center tracking-wide">
            {props.tech}
          </p>
          {/* make this a button */}
          {props.projectUrl ? (
            <div className="flex justify-center">
              <Link href={props.projectUrl}>
                <button className="text-center py-1 text-sm md:text-lg cursor-pointer w-[200px] tracking-widest shadow-md shadow-gray-900 border-gray-900 border-2 hover:bg-white/40 duration-300 ease-in-out transition-all">
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
