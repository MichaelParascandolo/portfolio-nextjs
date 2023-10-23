import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import profilePic from "/public/assets/profile/portfolio_about.png";

const About = () => {
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

  const styles = {
    p: "py-2 text-gray-600 dark:text-gray-300",
  };

  return (
    <div
      id="about"
      className="w-full min-h-screen scroll-mt-10 p-2 flex items-center py-16 dark:bg-[#1E1E1E]"
    >
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-primary">About</p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="cols-span-1 md:col-span-2">
            <h2 className="py-4 dark:text-white">Who I Am</h2>
            <p className={styles.p}>
              Hello, I'm <span className="text-primary">Michael</span>, a{" "}
              <span className="text-primary">full-stack developer</span> with a
              passion for technology and a dedication to developing high-quality
              web applications. I graduated with a{" "}
              <span className="text-primary">bachelor's degree</span> in
              Computing from Stockton University and have a strong foundation in
              front-end development.
            </p>

            <p className={styles.p}>
              I'm currently in the process of expanding my expertise in{" "}
              <span className="text-primary">back-end development</span>,
              including{" "}
              <span className="text-primary">databases and REST APIs</span>.
              While my background primarily lies in front-end development, I am
              actively working on building a well-rounded skill set that
              includes full-stack capabilities.
            </p>

            <p className={styles.p}>
              Reach out to me on social media or use the{" "}
              <a href="your_contact_form_link_here" className="text-primary">
                contact form
              </a>{" "}
              below to get in touch.
            </p>

            <p className={styles.p}>
              Let's build something{" "}
              <span className="text-primary">amazing together</span>!
            </p>
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
