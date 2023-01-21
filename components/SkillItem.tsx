import Image from "next/image";
import { motion } from "framer-motion";

const SkillItem = ({ name }: { name: string }) => {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        variants={item}
        whileHover={{
          position: "relative",
          zIndex: 1,
          scale: [1, 1.2, 1],
          // rotate: [0, 15, -15, 0],
          transition: {
            duration: 0.4,
          },
        }}
      >
        {/* maybe p-6 instead? */}
        <div className="p-3 shadow-xl shadow-gray-400 rounded-xl border-solid border-2 border-gray-200 bg-[#ecf0f3] dark:bg-[#282828] dark:shadow-black dark:border-black">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={
                  "/assets/skills/" +
                  name.replace(/\s/g, "").toLowerCase() +
                  ".png"
                }
                width="64"
                height="64"
                alt={name}
                draggable={false}
              />
            </div>
            <div className="flex flex-col items-center justify-center dark:text-gray-100">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SkillItem;
