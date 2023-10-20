import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bear from "public/assets/me/bear.jpeg";
import ActionButton from "../components/ActionButton";

const NotFound = () => {
  return (
    <>
      <Navbar background={true} />
      <div className="w-full text-center dark:bg-[#1E1E1E]">
        <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
          <div className="mt-[100px]">
            <h1 className="pb-4 text-gray-700">
              🤔 <span className="text-primary">OOPS!</span>
            </h1>
            <h2 className="py-2 -mb-10 text-gray-700 dark:text-white">
              We can't find the page you're looking for.
            </h2>
            <ActionButton link="/#home" action="home" />
            <div className="h-auto mt-5 mx-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 max-w-[80%] dark:bg-[#282828] dark:shadow-black dark:border-black">
              <Image
                src={bear}
                alt="Bear"
                width="756"
                height="1008"
                className="rounded-xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <Footer />
        <div className="h-[20px]" />
      </div>
    </>
  );
};

export default NotFound;
