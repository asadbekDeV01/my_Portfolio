import React from "react";
import { motion } from "framer-motion";


function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border-2 border-[#333333] max-sm:w-[120px] max-sm:h-[120px] rounded-full h-[200px] w-[200px] mt-52
        animate-ping"
      />
      <div className="rounded-full border border-[#333333] max-sm:w-[220px] max-sm:h-[220px] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] max-sm:w-[320px] max-sm:h-[320px] h-[500px] w-[500px] absolute mt-52" />
      <div
        className="rounded-full border border-[#F7ABBA] opacity-20 max-sm:w-[500px] max-sm:h-[500px] h-[650px] w-[650px]
        absolute mt-52 animate-pulse"
      />
      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
