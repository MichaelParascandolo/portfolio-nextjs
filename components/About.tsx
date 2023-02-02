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
            {/* <p className={styles.p}>
              My name is Michael and I have always had a passion for technology.
            </p> */}
            <p className={styles.p}>
              I was fascinated with software development and knew I wanted to
              learn how to code. After teaching myself, I enrolled in the
              Computer Science program at Ocean County Vocational School.
            </p>
            <p className={styles.p}>
              Fast forward to today, I am about to graduate with my bachelors in
              Computing from Stockton University (Spring 2023). I develop
              beautiful, responsive, SEO-optimized web applications using modern
              technologies.
            </p>
            {/* <p className={styles.p}>
              Fast forward to today, I graduated with my bachelors in Computing
              from Stockton University. I develop beautiful, responsive,
              SEO-optimized web applications using modern technologies.
            </p> */}
            <p className={styles.p}>
              I am always looking to learn new technologies and enjoy expanding
              my skill set. Right now, I am learning backend technologies and
              also dabbling with mobile/desktop development.
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
                <Link href="/#projects">
                  <span className={styles.link}>latest projects</span>
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
