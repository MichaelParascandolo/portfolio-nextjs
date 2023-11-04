import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ background }: { background: boolean }) => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

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

  const navLinks: { title: string; path: string }[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/#about",
    },
    {
      title: "Skills",
      path: "/#skills",
    },
    {
      title: "Projects",
      path: "/#projects",
    },
    {
      title: "Resume",
      path: "/resume",
    },
    {
      title: "Contact",
      path: "/#contact",
    },
  ];

  const styles = {
    common: "fixed w-full h-20 z-[100] ease-in-out duration-300 transition-all",
    background: "bg-[#ecf0f3] dark:bg-[#1E1E1E]",
    shadow: `shadow-xl border-b-2 border-primary bg-[#ecf0f3] dark:bg-[#1E1E1E] dark:shadow-2xl`,
  };

  return (
    <div
      className={`${styles.common} ${background ? styles.background : ""} ${
        shadow ? styles.shadow : "border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:text-gray-200">
        <div
          className={
            background || shadow ? "inline-flex" : "inline-flex text-white"
          }
        >
          <Logo />
          <ThemeToggle />
        </div>

        <div className={background || shadow ? null : "text-white"}>
          {/* DESKTOP NAVBAR */}
          <ul className="mr-2 hidden md:flex">
            {navLinks.map((item, index) => (
              <Link href={item.path} key={index}>
                <li
                  className={
                    "ml-10 text-sm uppercase border-b-2 border-transparent hover:border-primary ease-in duration-200"
                  }
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex">
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE NAVBAR */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out transition-all duration-500"
            : null
        }
      >
        {nav ? (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: nav ? 0 : "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="h-screen w-[75%] max-w-[300px] bg-[#ecf0f3] p-10 border-r-2 border-primary dark:bg-[#1E1E1E]">
              <div className="flex w-full items-center justify-between">
                <div onClick={() => setNav(!nav)}>
                  <Logo />
                </div>
                <div
                  className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer dark:text-gray-200 dark:bg-[#282828] dark:shadow-black dark:border-black"
                  onClick={() => setNav(!nav)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-primary my-4">
                <p className="w-[85%] md:w-[90%] py-4 dark:text-gray-200">
                  Let's build something amazing together.
                </p>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase dark:text-gray-200">
                  {navLinks.map((item, index) => (
                    <Link href={item.path} key={index}>
                      <li
                        className={"py-4 text-sm flex justify-between"}
                        onClick={() => setNav(false)}
                      >
                        {item.title}
                        <MdChevronRight size={20} />
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="pt-20">
                  <p className="uppercase tracking-widest text-primary">
                    Let's Connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <Socials size={20} circles={false} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
