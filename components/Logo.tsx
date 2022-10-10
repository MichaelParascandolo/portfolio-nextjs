import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="inline-flex">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <Link href="/">
            <span className="font-logoMP text-[#ee2d2d] text-4xl cursor-pointer select-none inline-flex">
              {/* &#123;Mp&#125; */}
              MP
            </span>
          </Link>
        </motion.div>
        <div className="cursor-pointer ml-5">
          <CgDarkMode
            size={25}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
