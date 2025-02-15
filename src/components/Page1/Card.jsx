import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/ANZO.jpg)",
      }}
      className="w-full h-[95vh] rounded-[40px] p-15 bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      {/* <img className="w-full h-full" src="/images/ANZO.jpg" /> */}
      <div className="flex justify-between items-center">
        <img src="/images/logo.png" className="w-18 drop-shadow-xl" />
        <div className="flex gap-3 items-center">
          <div className="bg-white px-0.5 py-0.5 rounded-full">
            <button className="bg-black px-5 py-1 rounded-full text-white">
              Hire Me
            </button>
          </div>
          <BsThreeDotsVertical color="#fff" size={"1.2em"} />
        </div>
      </div>
      <div className="mt-30 w-[45%]">
        <h1 className="text-7xl text-white font-anzo-bold">
          I AM{" "}
          <span className="text-black">
            DARK MODE
            <span className="text-white text-4xl absolute">&trade;</span>
          </span>{" "}
          <span className="text-[7.5vw] font-bold">DEVELOPER</span> TO HIRE
        </h1>
      </div>
      <div className="mt-30 w-[45%]">
        <h4 className="text-white font-anzo-regular">
          BRAND DESIGN | WEBSITE DESIGN
        </h4>
      </div>
    </div>
  );
};

export default Card;
