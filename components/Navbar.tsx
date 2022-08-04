import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ background }: { background: boolean }) => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const linkHover: string =
    "ml-10 text-sm uppercase border-b-2 border-transparent hover:border-[#ee2d2d] ease-in duration-200";
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={
        background || shadow
          ? { backgroundColor: "#ecf0f3" }
          : { backgroundColor: "transparent" }
      }
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in duration-300"
          : "fixed w-full h-20 z-[100] ease-in-out duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Logo />
        <div style={background || shadow ? {} : { color: "white" }}>
          <ul className="mr-2 hidden md:flex">
            <Link href="/">
              <li className={linkHover}>Home</li>
            </Link>
            <Link href="/#about">
              <li className={linkHover}>About</li>
            </Link>
            <Link href="/#skills">
              <li className={linkHover}>Skills</li>
            </Link>
            <Link href="/#projects">
              <li className={linkHover}>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className={linkHover}>Contact</li>
            </Link>
          </ul>
          <div
            className="md:hidden hover:scale-110 ease-in duration-300 cursor-pointer"
            onClick={handleNav}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div onClick={handleNav}>
                <Logo />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#ee2d2d] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something amazing together.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#ee2d2d]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Socials size={20} circles={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
