import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

const Navbar = ({ background }: { background: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const style = {
    linkHover:
      "ml-10 text-sm uppercase border-b-2 border-transparent hover:border-[#ee2d2d] ease-in duration-200",
    mobileLink: "py-4 text-sm",
  };
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
  useEffect(() => {
    // setTheme("light");
  }, []);
  return (
    // #ecf0f3 light color
    // #334155 dark color
    <div
      className={
        background && !shadow
          ? "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-[#ecf0f3] dark:bg-slate-700"
          : background && shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in duration-300 bg-[#ecf0f3] dark:bg-slate-700"
          : !background && shadow
          ? "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-[#ecf0f3] dark:bg-slate-700"
          : "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-transparent"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:text-gray-200">
        <Logo />
        <div style={background || shadow ? {} : { color: "white" }}>
          <ul className="mr-2 hidden md:flex">
            <div className="cursor-pointer">
              <CgDarkMode
                size={25}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
            <Link href="/">
              <li className={style.linkHover}>Home</li>
            </Link>
            <Link href="/#about">
              <li className={style.linkHover}>About</li>
            </Link>
            <Link href="/#skills">
              <li className={style.linkHover}>Skills</li>
            </Link>
            <Link href="/#projects">
              <li className={style.linkHover}>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className={style.linkHover}>Contact</li>
            </Link>
          </ul>
          <div className="flex">
            <div className="md:hidden cursor-pointer mr-5">
              <CgDarkMode
                size={25}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </div>
            <div className="md:hidden cursor-pointer" onClick={handleNav}>
              <AiOutlineMenu size={25} />
            </div>
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-slate-700"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div onClick={handleNav}>
                <Logo />
              </div>
              <div
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-900 dark:text-gray-200"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#ee2d2d] my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-200">
                Let's build something amazing together.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase dark:text-gray-200">
              <Link href="/">
                <li onClick={() => setNav(false)} className={style.mobileLink}>
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className={style.mobileLink}>
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className={style.mobileLink}>
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className={style.mobileLink}>
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className={style.mobileLink}>
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
