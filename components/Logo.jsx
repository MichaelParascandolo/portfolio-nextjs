import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <>
      <Link href="/">
        <p className="font-logoMP text-[#ee2d2d] text-4xl cursor-pointer select-none hover:scale-105 ease-in duration-300">
          &#123;Mp&#125;
        </p>
      </Link>
    </>
  );
};

export default Logo;
