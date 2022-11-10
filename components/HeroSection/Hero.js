import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Choose up to 3."],
    delaySpeed: 2000,
  });
  return (
    <div className={"flex flex-1 flex-col px-5 py-12"}>
      <h1
        className={
          "text-white font-poppins lg:text-6xl text-xl text-center pt-5 lg:p-0"
        }
      >
        Compare Netherlands
      </h1>
      <h1
        className={
          "text-white font-poppins lg:text-6xl text-xl text-center pt-5 lg:p-0"
        }
      >
        Streaming Platforms
      </h1>
      <p className={"text-[#9E9E9E] text-center pt-5"}>{text}</p>
    </div>
  );
};

export default Hero;
