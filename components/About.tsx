import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import profilePic from "/public/assets/me/me.jpeg";

const About = () => {
  const styles = {
    p: "py-2 text-gray-600 dark:text-gray-300",
    link: "text-primary cursor-pointer border-b-2 border-transparent hover:border-black dark:hover:border-white ease-in duration-200",
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const animation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
      },
    },
  };
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 dark:bg-[#1E1E1E]"
    >
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-primary">About</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="cols-span-1 md:col-span-2">
            <h2 className="py-4 dark:text-white">Who I Am</h2>
            <p className={styles.p}>
              Hello, I'm <span className="text-primary">Michael</span>, a{" "}
              <span className="text-primary">front-end</span> developer with a
              passion for developing high-quality web applications. I graduated
              with a <span className="text-primary">Bachelor's degree</span> in
              Computing from{" "}
              <span className="text-primary">Stockton University</span>.
            </p>
            <p className={styles.p}>
              Recently, I had the opportunity to work with a group of other
              developers to create a{" "}
              <span className="text-primary">full-stack</span> web application
              for a <span className="text-primary">commercial client</span>. I
              was responsible for developing and designing the user interface,
              ensuring that the website was visually appealing and
              user-friendly, as well as ensuring the{" "}
              <span className="text-primary">front-end</span> and{" "}
              <span className="text-primary">back-end</span> communicate
              effectively.
            </p>
            <p className={styles.p}>
              Currently, I'm expanding my knowledge of{" "}
              <span className="text-primary">back-end</span> development and{" "}
              <span className="text-primary">database</span> design /
              implementation. I believe that having a well-rounded skill set is
              essential for building high-quality web applications.
            </p>
            <p className={styles.p}>
              Reach out on social media or use the{" "}
              <a href="#contact" className={styles.link}>
                contact
              </a>{" "}
              form below to get in touch.
            </p>
            <p className={styles.p}>
              Let's build something{" "}
              <span className="text-primary">amazing</span> together!
            </p>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={animation}
            >
              <p className="text-gray-600 tracking-widest pt-3 capitalize dark:text-gray-300">
                <Link href={"/resume"}>
                  <span className={styles.link}>My resume</span>
                </Link>
              </p>
              <p className="text-gray-600 tracking-widest pt-3 capitalize dark:text-gray-300">
                <Link
                  href="/#projects"
                  className="text-gray-600 tracking-widest pt-3 capitalize dark:text-gray-300"
                >
                  <span className={styles.link}>Latest projects</span>
                </Link>
              </p>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animation}
          >
            <motion.div
              whileHover={{
                position: "relative",
                zIndex: 1,
                scale: [1, 1.2, 1],
                rotate: [0, 1, -1, 0],
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <div className="span-cols-1">
                <div className="max-w-[90%] h-auto m-auto shadow-xl shadow-gray-500 rounded-xl flex items-center justify-center p-4 border-solid border-2 border-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black">
                  <Image
                    src={profilePic}
                    alt="Michael Parascandolo"
                    width="579"
                    height="772"
                    draggable={false}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
