import { useState, useRef, useEffect } from "react";
import { TbSend } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import contactPic from "/public/assets/profile/portfolio_contact.png";
import ActionButton from "./ActionButton";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [message, setMessage] = useState<string>("Send Message");
  const form = useRef();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  return (
    <div
      id="contact"
      className="w-full min-h-screen scroll-mt-8 dark:bg-[#1E1E1E]"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-primary">
          Contact
        </p>
        <h2 className="py-4 dark:text-white">Say Hello</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 border-solid border-2 border-gray-200 dark:shadow-black dark:border-black">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={animateIn}
            >
              <div className="lg:p-4 h-full">
                <h2 className="text-gray-700 dark:text-gray-200">
                  Michael Parascandolo
                </h2>
                <p className="tracking-widest text-primary mb-4">
                  Full-Stack Developer
                </p>
                <motion.div
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    // scale: [1, 1.1, 1],
                    rotate: [0, 2, -2, 0],
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  <Image
                    className="rounded-2xl"
                    src={contactPic}
                    alt="Michael Parascandolo"
                    draggable={false}
                  />
                </motion.div>
                {/* <p className="pt-4 text-center text-gray-600 dark:text-gray-300">
                  Contact me and let's chat! 😊
                </p> */}
                <div className="flex items-center justify-between py-4">
                  <Socials size={23} circles={true} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 border-solid border-2 border-gray-200 dark:shadow-black dark:border-black">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <label>Name:</label>
                    <input type="text" name="name" required />
                  </div>
                  <div className="flex flex-col py-2">
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" required />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div className="flex flex-col py-2">
                  <label>Subject:</label>
                  <input type="text" name="subject" required />
                </div>
                <div className="flex flex-col py-2">
                  <label>Message:</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-500 dark:border-black dark:text-gray-100 dark:bg-[#282828]"
                    rows={7}
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
        <ActionButton link={"/"} action="top" />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
