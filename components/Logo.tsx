import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
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
            <span className="font-logoMP text-primary text-4xl cursor-pointer select-none inline-flex">
              {/* &#123;Mp&#125; */}
              MP
            </span>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Logo;
