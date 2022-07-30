/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#ee2d2d]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 tracking-widest">
            // I Love Tech ❤️
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dolore at nam totam cumque, facere, minima quia velit labore alias
            perferendis, magnam non ullam voluptatum!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dolore at nam totam cumque, facere, minima quia velit labore alias
            perferendis, magnam non ullam voluptatum!
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my latest{" "}
            <Link href="/#projects">
              <span className="text-[#ee2d2d] cursor-pointer">projects</span>
            </Link>
            !
          </p>
        </div>
        <div className="max-w-[90%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/me/Me.jpeg"
            alt="/"
            width="579"
            height="772"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
