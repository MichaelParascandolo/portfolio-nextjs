import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link href="/">
          <p className="font-logoMP text-[#ee2d2d] text-4xl cursor-pointer select-none">
            &#123;Mp&#125;
          </p>
        </Link>
      </motion.div>
    </>
  );
};

export default Logo;
