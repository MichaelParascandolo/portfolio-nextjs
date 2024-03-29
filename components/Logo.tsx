import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
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
          <span className="font-logo text-primary text-4xl cursor-pointer select-none">
            MP
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Logo;
