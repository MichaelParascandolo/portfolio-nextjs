import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdComputer, MdSchool, MdWork } from "react-icons/md";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const resume = () => {
  const styles = {
    section: "text-gray-700 mt-5 text-left tracking-wide dark:text-gray-200",
    list: "list-disc text-left font-light",
    sub: "text-sm text-gray-700 tracking-widest dark:text-white",
    item: "text-gray-700 dark:text-gray-300",
    skills: "text-gray-700 tracking-widest dark:text-gray-200",
    colored: "text-primary",
    bar: "bg-gray-700 h-0.5 my-3 rounded-lg dark:bg-white",
    grid: "grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8",
    icons: "mr-2 mb-1 inline-flex",
  };
  return (
    <>
      <Navbar background={true} />
      <div className="w-full text-center dark:bg-[#1E1E1E]">
        <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center">
          {/* <div className="mt-[100px] w-[90%] md:w-[80%]"> */}
          <div className="mt-[100px] w-[80%]">
            <h1 className="py-2 text-gray-700 text-[45px] tracking-wide dark:text-gray-200">
              Michael <p className={styles.colored}>Parascandolo</p>
            </h1>
            <p className={styles.sub}>Little Egg Harbor, New Jersey</p>
            <p className={styles.sub}>
              <a
                href="mailto:michaelparascandolo@me.com"
                className={styles.colored}
              >
                michaelparascandolo@me.com
              </a>
            </p>
            <h3 className="text-gray-700 text-center mt-4 text-3xl tracking-wide dark:text-gray-200">
              <span className={styles.colored}>
                <MdComputer className={styles.icons} />
              </span>
              Technical Skills
            </h3>
            <div className={styles.bar} />
            <p className={styles.skills}>
              HTML5 | CSS5 | JavaScript | TypeScript | jQuery |{" "}
            </p>
            <p className={styles.skills}>
              {" "}
              React JS | Next JS | Tailwind | Java | BootStrap | Responsive
              Design | SEO | Git
            </p>
            <div className={styles.bar} />
            <h2 className={styles.section}>
              <span className={styles.colored}>
                <MdSchool className={styles.icons} />
              </span>
              Higher Education
            </h2>
            <h3 className={styles.section}>
              <span className={styles.colored}>Stockton University</span> |{" "}
              Galloway, NJ
              <p className={styles.sub}>2019 - 2023</p>
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>Bachelors Degree in Computing</li>
              <li className={styles.item}>Achieved 3.4 GPA</li>
            </ul>
            <h2 className={styles.section}>
              <span className={styles.colored}>
                <MdWork className={styles.icons} />
              </span>
              Professional Experience
            </h2>
            <h3 className={styles.section}>
              <span className={styles.colored}>Software Developer</span> |
              LightSpeed Voice
              <p className={styles.sub}>2023 - Current</p>
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                Developed Angular-Laravel web app, adding features and improving
                UX.
              </li>
              <li className={styles.item}>
                Enhanced Electron desktop app's functionality and cross-platform
                performance.
              </li>
              <li className={styles.item}>
                Optimized frontend and backend performance.
              </li>
              <li className={styles.item}>
                Agile advocate, ensuring efficient sprints.
              </li>
            </ul>
            <h3 className={styles.section}>
              <span className={styles.colored}>Verizon Store Manager</span> |{" "}
              R-Wireless
              <p className={styles.sub}>2019 - 2023</p>
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                Achieved top quartile performance across multiple sales KPIs
              </li>
              <li className={styles.item}>
                Maintained high inventory integrity and minimize shrink
              </li>
              <li className={styles.item}>
                Grew store profitability significantly year over year
              </li>
              <li className={styles.item}>
                Responsible for hiring, training, and developing a
                high-performance sales team
              </li>
            </ul>
            <h3 className={styles.section}>
              <span className={styles.colored}>Mobile Sales Team Lead</span> |{" "}
              Best Buy
              <p className={styles.sub}>2015 - 2019</p>
            </h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                Supported sales strategies to achieve operating results and
                department profitability
              </li>
              <li className={styles.item}>
                Ensured employees are getting to know their customers on a
                deeper level and providing complete solutions
              </li>
              <li className={styles.item}>
                Supported team members with coaching and training to help
                perfect their craft as sales professionals
              </li>
              <li className={styles.item}>
                Created a development plan with each employee to help achieve
                short/long term goals
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/#">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-[#282828] dark:shadow-black dark:border-black">
              <HiOutlineChevronDoubleLeft
                size={30}
                className={styles.colored}
              />
            </div>
          </Link>
        </div>
        <Footer />
        <div className="h-[20px]" />
      </div>
    </>
  );
};

export default resume;
