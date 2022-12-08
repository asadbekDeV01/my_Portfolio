import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20] text-gray-500 text-3xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="/aboutimage.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
    md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10 text-center">
        <h4 className="text-4xl font-semibold ">
          Here is a  
          <span className="underline decoration-[#f7ABBA]/50 px-2">little</span>
          background
        </h4>
        <p className="text-base text-center">
          I m Asadbek I have been coding for 1 year. You can see me as a Front
          End Developer. I love coding and I hope to be the best programmer. I
          thank my parents who believe in me. I also thank my teacher who taught
          me programming. I hope to work in a good company in the future. I was
          born on December 22, 2006. I am currently 16 years old.
        </p>
      </div>
    </motion.div>
  );
}
