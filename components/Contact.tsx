import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/Hi";
import { TbSend } from "react-icons/Tb";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const style: { label: string } = {
    label: "uppercase text-sm py-2 dark:text-gray-200",
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const [message, setMessage] = useState<string>("Send Message");
  const form = useRef();
  const sendEmail = (e: any) => {
    setMessage("Sending . . .");
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_jbpduud",
          "template_pulg701",
          form.current,
          process.env.NEXT_PUBLIC_API_KEY
        )
        .then(
          (result) => {
            setMessage("Message Sent!");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (err) {
      setMessage("Something Went Wrong :(");
    }
  };
  return (
    <div id="contact" className="w-full dark:bg-slate-700">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Contact
        </p>
        <h2 className="py-4 dark:text-white">Say Hello</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 border-solid border-2 border-gray-200 dark:shadow-gray-900 dark:border-gray-800">
            <div className="lg:p-4 h-full">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: {
                    scale: 0.7,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  },
                }}
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
                  <div className="flex text-center justify-center">
                    <Image
                      className="rounded-2xl"
                      src="/../public/assets/me/me2.jpg"
                      width="500"
                      height="559"
                      alt="/"
                    />
                  </div>
                </motion.div>
              </motion.div>
              <div>
                <h2 className="py-2 bg-gradient-to-r from-[#f26969] to-[#ee2d2d] text-transparent bg-clip-text">
                  Michael Parascandolo
                </h2>
                <p className="tracking-widest dark:text-gray-200">
                  Front-End Web Developer
                </p>
                <p className="py-4 dark:text-gray-200">
                  I am available for a full-time position. Contact me and let's
                  chat! 😊
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 tracking-widest text-[#ee2d2d]">
                  Connect With me
                </p>
                <div className="flex items-center justify-between py-4">
                  <Socials size={23} circles={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 border-solid border-2 border-gray-200 dark:shadow-gray-900 dark:border-gray-800">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col py-2">
                    <label className={style.label}>Name:</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-900 dark:text-gray-100"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className={style.label}>Phone Number:</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-900 dark:text-gray-100"
                      type="tel"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className={style.label}>Email:</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-900 dark:text-gray-100"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className={style.label}>Subject:</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-900 dark:text-gray-100"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className={style.label}>Message:</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:border-gray-900 dark:text-gray-100"
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
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-900">
              <HiOutlineChevronDoubleUp size={30} className="text-[#ee2d2d]" />
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
