import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectItemData {
  title?: string;
  backgroundImg: StaticImageData | string;
  description?: string;
  tech?: string;
  projectUrl?: string;
}

const ProjectItem = (props: ProjectItemData) => {
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
        className={`relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-0 border-solid border-2 border-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black ${
          props.projectUrl
            ? "group hover:bg-gradient-to-b from-[#BC4350] to-primary dark:bg-[#282828]"
            : null
        }`}
      >
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={props.backgroundImg}
          draggable={false}
          width={1800}
          height={1760}
          alt={props.title}
        />
        <div className="hidden group-hover:block w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-4xl font-semibold text-gray-200 tracking-wide text-center">
            {props.title}
          </h3>
          <p className="mb-2 text-[12px] text-gray-300 font-light text-sm md:text-[15px] text-center tracking-widest">
            {props.tech}
          </p>
          {props.projectUrl ? (
            <div className="flex justify-center">
              <Link href="/[slug]" as={`/${props.projectUrl}`}>
                <span className="border-b-2 uppercase text-sm text-white cursor-pointer border-transparent tracking-widest font-semibold hover:border-white ease-in duration-200">
                  more info
                </span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
