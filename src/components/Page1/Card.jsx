import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  return (
    <>
      <img
        className="relative w-full h-full rounded-[45px]"
        src="/images/ANZO.jpg"
      />
      <div className="absolute flex justify-between items-center">
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
      <div>
        <h1 className="text-8xl text-white font-bold">
          I AM A <b className="">DARK MODE</b> DEVLOPER TO HIRE
        </h1>
      </div>
      {/* </div> */}
    </>
  );
};

export default Card;
