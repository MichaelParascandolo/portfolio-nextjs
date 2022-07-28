import Image from "next/image";
import React, { useEffect, useState } from "react";
import Socials from "./Socials";

const Main = () => {
  const quotes = [
    "”Innovation distinguishes between a leader and a follower.” - Steve Jobs",
    "”Your time is limited, so don't waste it living someone else's life.” - Steve Jobs",
    "”Don’t let the noise of others’ opinions drown out your own inner voice.” - Steve Jobs",
    "“You can’t connect the dots looking forward; you can only connect them looking backwards.” - Steve Jobs",
    "“Stay hungry. Stay foolish.” - Steve Jobs",
    "“We’re here to put a dent in the universe. Otherwise why else even be here?” - Steve Jobs",
    "“Have the courage to follow your heart and intuition.” - Steve Jobs",
  ];
  const [quote, setQuote] = useState("");
  useEffect(
    () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]),
    []
  );
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="pt-4 uppercase text-sm tracking-widest text-gray-600">
            {quote}
          </p>
          <Image
            src={`/../public/me/memoji${Math.floor(Math.random() * 4)}.png`}
            alt="/"
            width="250"
            height="250"
            className="hover:scale-110 ease-in duration-300"
          />
          <h1 className="py-4 text-gray-700">
            Hello👋, I'm <span className="text-[#ee2d2d]">Mike</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building and designing
            exception digital experiences. I'm focused on building responsive
            front-end web applications using modern technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Socials size="23" circles="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
