import React from "react";

const Footer = () => {
  return (
    <>
      <span className="flex justify-center text-center pt-5 tracking-widest">
        © {new Date().getFullYear()} Michael Parascandolo
      </span>
    </>
  );
};

export default Footer;
