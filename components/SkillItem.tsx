import React from "react";
import Image from "next/image";
const SkillItem = ({ name }: { name: string }) => {
  return (
    <>
      {/* maybe p-6 instead? */}
      <div className="p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src={"/../public/assets/skills/" + name + ".png"}
              width="64"
              height="64"
              alt="/"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
