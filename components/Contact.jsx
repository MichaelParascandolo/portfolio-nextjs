import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/Hi";
import { TbSend } from "react-icons/Tb";
import Socials from "./Socials";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    setMessage("Sending . . .");
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_jbpduud",
          "template_pulg701",
          form.current,
          "e0y8_31rMzRSNpzrq"
        )
        .then(
          (result) => {
            // console.log(result.text);
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
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ee2d2d]">
          Contact
        </p>
        <h2 className="py-4">Say Hello</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex text-center justify-center">
                <Image
                  className="rounded-xl hover:rounded-3xl ease-in duration-300"
                  src="/../public/me/me2.jpg"
                  width="500"
                  height="559"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Michael Parascandolo</h2>
                <p className="tracking-widest">Front-End Developer</p>
                <p className="py-4">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-small py-2">Name:</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-small py-2">
                      Phone Number:
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email:</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject:</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message:</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="5"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center text-gray-700 tracking-wide">
                  {message}
                </div>
                <button className="w-full p-4 text-gry-100 mt-4" type="submit">
                  <span className="flex justify-center">
                    Send Message&nbsp;
                    <TbSend size={23} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#ee2d2d]" />
            </div>
          </Link>
        </div>
        <span className="flex justify-center text-center pt-5 tracking-widest">
          © {new Date().getFullYear()} Michael Parascandolo
        </span>
      </div>
    </div>
  );
};

export default Contact;
