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
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-primary">
            About
          </p>
          <h2 className="py-4 dark:text-white">Who I Am</h2>
          <p className={styles.p}>
            I have had a love for technology for as long as I can remember. When
            I received my first desktop computer at a young age, my mind was
            blown by all of the different things I could create with it. I loved
            being able to edit photos and create/edit my own movies. In the back
            of my mind, I always wanted to learn how to code.
          </p>
          <p className={styles.p}>
            In my teenage years, I decided it was time to learn. I started with
            HTML and CSS, learning on my own before enrolling in the Computer
            Science program at Ocean County Vocational School. I learned to make
            my sites more interactive than ever using JavaScript and jQuery. I
            developed and deployed my first website around 2014, which was for
            my family's pizzeria and Italian restaurant. I was absolutely in
            love with coding.
          </p>
          <p className={styles.p}>
            Fast forward to today, and my passion and skill for creating
            experiences on the web has only gotten stronger. I develop
            beautiful, responsive, SEO optimized web applications. I work with
            modern JavaScript frameworks such as React and Next JS, as well as
            CSS frameworks like Bootstrap and Tailwind.
          </p>
          <p className={styles.p}>
            I will graduate from Stockton University with my bachelor's degree
            in computing in the spring of 2023.
          </p>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animation}
          >
            <Link href={"/resume"}>
              <p className="text-gray-600 tracking-widest pt-3 capitalize dark:text-gray-300">
                <span className={styles.link}>My resume</span>
              </p>
            </Link>
            <Link href="/#projects">
              <p className="text-gray-600 tracking-widest pt-3 capitalize dark:text-gray-300">
                <span className={styles.link}>latest projects</span>
              </p>
            </Link>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
