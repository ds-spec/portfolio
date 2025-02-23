import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const LaptopAnimatedView = () => {
  const words = "DESIGN";
  const spanWords = ["DESIGN", "DEVELOPMENT", "CREATIVITY", "FUNCTIONLAITY"];
  spanWords.map((word) => console.log(word.split("").flat()));
  //   const splitWords = () => {
  //     const newWords = words.map((word) => console.log(word.split("")));
  //     console.log(newWords);
  //   };

  //   useEffect(() => {
  //     splitWords();
  //   }, []);

  useGSAP(() => {
    var tl = gsap.timeline();
    // const newWords = words?.split("");
    // console.log(newWords);
    // newWords?.map((text) =>
    tl.from(".text", {
      duration: 0.8,
      scale: 0.4,
      x: -30,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut(1,0.4)",
      scrollTrigger: {
        trigger: "#wordsDiv",
        start: "top 70%",
        end: "bottom center",
        markers: true,
      },
    });

    tl.to(
      ".text",
      {
        duration: 0.4,
        x: -80,
        stagger: 0.2,
        opacity: 0,
        ease: "power1.inOut(1,0.4)",
        scrollTrigger: {
          trigger: "#wordsDiv",
          start: "top 70%",
          end: "bottom center",
          markers: true,
        },
      },
      "+=0.5"
    );
  });

  return (
    <div id="wordsDiv" className="relative flex items-center justify-center overflow-y-hidden">
      <img src="/images/laptop.png" className="w-[65vw]" />
      <div
        className="flex gap-4 absolute text-[32vw] font-anzo-italic text-white drop-shadow-md"
      >
        {words?.split("").map((text, index) => (
          <span key={index} className="text">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LaptopAnimatedView;
