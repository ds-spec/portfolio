import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        10
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      rotateX: yVal,
      rotateY: xVal,
      ease: "expoScale(0.5,7,none)",
      duration: 0.2,
    });
  }, [xVal, yVal]);

  const mouseLeave = () => {
    gsap.to(tiltRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: "power4.out",
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/ANZO.jpg)",
        perspective: "1000px",
      }}
      className="w-full h-[95vh] rounded-[40px] p-15 bg-cover bg-center bg-no-repeat relative overflow-hidden shadow-2xl"
    >
      <div className="relative flex justify-between items-center">
        <img src="/images/logo.png" className="w-18 drop-shadow-xl" />
        <div className="flex gap-3 items-center">
          <div className="bg-white px-0.5 py-0.5 rounded-full">
            <button className="bg-black px-5 py-1 rounded-full text-white cursor-pointer">
              Hire Me
            </button>
          </div>
          <BsThreeDotsVertical color="#fff" size={"1.2em"} />
        </div>
      </div>
      <div
        ref={tiltRef}
        onMouseMove={(e) => mouseMoving(e)}
        onMouseLeave={mouseLeave}
        className="mt-30 w-[45%]"
      >
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
        <h4 className="text-white text-xl font-anzo-regular">
          BRAND DESIGN | WEBSITE DESIGN
        </h4>
      </div>
    </div>
  );
};

export default Card;
