import React from "react";
import { motion } from "framer-motion";



function Skill({src,skill}) {
  return (
    <div className="group relative flex cursor-pointer  ">
      <motion.img
        src={src}
        initial={{
          
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 p-2 object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-out md:w-28 md:h-28"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
      ease-in-out group-hover:bg-white rounded-full h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
      z-0  "
      >
        <div className="flex items-center justify-center h-full rounded-full">
          <p className="text-3xl rounded-full font-bold text-black opacity-100">
            {skill}%  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
