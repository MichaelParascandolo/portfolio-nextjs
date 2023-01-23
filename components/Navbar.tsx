import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";

const Navbar = ({ background }: { background: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>();
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const styles = {
    linkHover:
      "ml-10 text-sm uppercase border-b-2 border-transparent hover:border-primary ease-in duration-200",
    mobileLink: "py-4 text-sm",
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
    setMounted(true); // prevents theme switcher button from being wrong
    // use to force a theme
    // setTheme("light");
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      className={
        background && !shadow
          ? "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-[#ecf0f3] dark:bg-[#1E1E1E]"
          : background && shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in duration-300 bg-[#ecf0f3] dark:bg-[#1E1E1E]"
          : !background && shadow
          ? "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-[#ecf0f3] dark:bg-[#1E1E1E]"
          : "fixed w-full h-20 z-[100] ease-in-out duration-300 bg-transparent"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:text-gray-200">
        <div
          className={
            background || shadow ? "inline-flex" : "inline-flex text-white"
          }
        >
          <Logo />
          {/* theme toggle */}
          <div className="ml-3 mt-2">
            {theme === "light" ? (
              <MdOutlineDarkMode
                size={25}
                className={"cursor-pointer"}
                onClick={() => setTheme("dark")}
              />
            ) : (
              <MdOutlineLightMode
                size={25}
                className={"cursor-pointer"}
                onClick={() => setTheme("light")}
              />
            )}
          </div>
        </div>

        <div className={background || shadow ? null : "text-white"}>
          {/* Navbar for larger screens */}
          <ul className="mr-2 hidden md:flex">
            <Link href="/">
              <li className={styles.linkHover}>Home</li>
            </Link>
            <Link href="/#about">
              <li className={styles.linkHover}>About</li>
            </Link>
            <Link href="/#skills">
              <li className={styles.linkHover}>Skills</li>
            </Link>
            <Link href="/#projects">
              <li className={styles.linkHover}>Projects</li>
            </Link>
            <Link href="/resume">
              <li className={styles.linkHover}>Resume</li>
            </Link>
            <Link href="/#contact">
              <li className={styles.linkHover}>Contact</li>
            </Link>
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
      {/* open mobile navbar*/}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : null
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] border-r-2 border-primary p-10 ease-in duration-500 dark:bg-[#1E1E1E]"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
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
          </div>
          {/* Navbar for smaller screens */}
          <div className="py-4 flex">
            <ul className="uppercase dark:text-gray-200">
              <li onClick={() => setNav(false)} className={styles.mobileLink}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setNav(false)} className={styles.mobileLink}>
                <Link href="/#about">About</Link>
              </li>
              <li onClick={() => setNav(false)} className={styles.mobileLink}>
                <Link href="/#skills">Skills</Link>
              </li>
              <li onClick={() => setNav(false)} className={styles.mobileLink}>
                <Link href="/#projects">Projects</Link>
              </li>
              <li onClick={() => setNav(false)} className={styles.mobileLink}>
                <Link href={"/resume"}>Resume</Link>
              </li>
              <li onClick={() => setNav(false)} className={styles.mobileLink}>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
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
    </div>
  );
};

export default Navbar;
