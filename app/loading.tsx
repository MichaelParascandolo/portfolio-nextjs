import Navbar from "./components/Navbar";

const loading = () => {
  return (
    <>
      <Navbar background={true} />
      <div>
        <h2 className="pb-4 text-gray-700 text-center items-center tracking-wide dark:text-gray-200">
          LOADING...
        </h2>
      </div>
    </>
  );
};

export default loading;
