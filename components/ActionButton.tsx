import Link from "next/link";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { IconType } from "react-icons";

const ActionButton = ({ link, action }: { link: string; action: string }) => {
  let IconComponent: IconType;
  switch (action) {
    case "top":
      IconComponent = HiOutlineChevronDoubleUp;
      break;
    case "back":
      IconComponent = HiOutlineChevronDoubleLeft;
      break;
    case "home":
      IconComponent = AiFillHome;
      break;
  }

  return (
    <div className="flex justify-center pt-10">
      <Link href={link}>
        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-[#282828] dark:shadow-black dark:border-black">
          <IconComponent size={30} className="text-primary" />
        </div>
      </Link>
    </div>
  );
};

export default ActionButton;
