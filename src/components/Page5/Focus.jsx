import React from "react";

const Focus = () => {
  return (
    <div className="w-full h-[95vh] overflow-y-hidden">
      <video
        src="/videos/robot.mp4"
        className="w-full object-contain z-2 relative"
        autoPlay
        loop
        muted
      />
      <div className="bg-white w-full h-full px-3 py-2 z-4">
        <h1 className="text-3xl font-bold text-center">
          Welcome to my portfolio
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default Focus;
