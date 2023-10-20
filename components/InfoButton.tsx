import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const InfoButton = ({ text, link }: { text: string; link: string }) => {
  let style = "text-gray-600 dark:text-gray-300 hover:border-primary";

  if (text === "more info" || text === "contact me") {
    style = "text-white hover:border-white";
  }

  return (
    <div className={"flex justify-center"}>
      <Link href={link}>
        <span
          className={`border-b-2 uppercase ${style} flex cursor-pointer border-transparent tracking-widest font-semibold ease-in duration-200`}
        >
          {text}
          <FiArrowRight size={20} className={"my-auto"} />
        </span>
      </Link>
    </div>
  );
};

export default InfoButton;
