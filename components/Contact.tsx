import { useState, useRef, useEffect } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { TbSend } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import contactPic from "/public/assets/me/me2.jpg";

const Contact = () => {
  const styles = {
    label: "uppercase text-sm py-2 dark:text-gray-200",
    textField:
      "border-2 rounded-lg p-3 flex border-gray-500 dark:border-black dark:text-gray-100 dark:bg-[#282828]",
  };
  // animations
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const animateIn = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
      },
    },
  };
  // email form
  const [message, setMessage] = useState<string>("Send Message");
  const form = useRef();
  const sendEmail = (e: any) => {
    setMessage("Sending . . .");
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "default_service",
          "template_pulg701",
          form.current,
          process.env.NEXT_PUBLIC_API_KEY
        )
        .then(
          (result) => {
            setMessage("Message Sent!");
            console.log(result.status);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (err) {
      setMessage("Something Went Wrong . . .");
    }
  };
  return (
    <div id="contact" className="w-full dark:bg-[#1E1E1E]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-primary">
          Contact
        </p>
        <h2 className="py-4 dark:text-white">Say Hello</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 border-solid border-2 border-gray-200 dark:shadow-black dark:border-black">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={animateIn}
            >
              <div className="lg:p-4 h-full">
                <motion.div
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.1, 1],
                    // rotate: [0, 1, -1, 0],
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  <div className="flex text-center justify-center">
                    <Image
                      className="rounded-2xl"
                      src={contactPic}
                      width="500"
                      height="559"
                      alt="Michael Parascandolo"
                      draggable={false}
                    />
                  </div>
                </motion.div>
                <div>
                  <h2 className="text-primary mt-5">Michael Parascandolo</h2>
                  <p className="tracking-widest dark:text-gray-200">
                    Front-End Web Developer
                  </p>
                  <p className="pt-4 dark:text-gray-200">
                    Contact me and let's chat! 😊
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8 tracking-widest text-primary">
                    Connect With me
                  </p>
                  <div className="flex items-center justify-between py-4">
                    <Socials size={23} circles={true} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 border-solid border-2 border-gray-200 dark:shadow-black dark:border-black">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <label className={styles.label}>Name:</label>
                    <input
                      className={styles.textField}
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className={styles.label}>Phone Number:</label>
                    <input
                      className={styles.textField}
                      type="tel"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className={styles.label}>Email:</label>
                  <input
                    className={styles.textField}
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className={styles.label}>Subject:</label>
                  <input
                    className={styles.textField}
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className={styles.label}>Message:</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-500 dark:border-black dark:text-gray-100 dark:bg-[#282828]"
                    rows={5}
                    name="message"
                    required
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gry-100 mt-4" type="submit">
                  <span className="flex justify-center">
                    {message}&nbsp;
                    <TbSend size={23} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-[#282828] dark:shadow-black dark:border-black">
              <HiOutlineChevronDoubleUp size={30} className="text-primary" />
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
