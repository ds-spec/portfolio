import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-[95vh] px-9 bg-black rounded-[40px] shadow-2xl mt-14">
      <video
        src="/videos/space.mp4"
        className="w-full h-full"
        autoPlay
        loop
        muted
      />
      {/* <div className="flex"> */}
      <div className="absolute top-8 flex flex-col justify-center items-start gap-18">
        <h1 className="font-anzo-italic w-[25vw] text-white text-[20vw] leading-[250px]">
          <span className="text-[#A0A6AB]">WHAT</span> I DO
        </h1>
        <div>
          <h5 className="font-anzo-bold text-white text-lg">
            I DESIGN AND DEVELOP
          </h5>
          <h5 className="font-anzo-regular text-[#686868]">
            MODERN IMPACTFUL AND LUXURIOUS
          </h5>
          <h5 className="font-anzo-bold text-white">
            websites that seamlessly bridge your goals with needs of your
            clients.
          </h5>
        </div>
      </div>
      <video
        id="moon"
        src="/videos/moon.mp4"
        className="w-[30vw] absolute bottom-36 right-40"
        autoPlay
        loop
        muted
      />

      {/* </div> */}
    </div>
  );
};

export default About;
