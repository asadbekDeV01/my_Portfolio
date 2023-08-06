import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienseCard({ src }) {
  return (
    <div
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[980px] snap-center bg-[#292929] p-10
    max-sm:space-y-1 max-sm:p-4
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
    max-sm:w-[300px] max-sm:h-auto"
    >
      <div>
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center mt-2"
          src={src}
          alt="/"
        />
      </div>
      <div className="px-0 md:px-10 text-center">
        <h4 className="text-4xl font-light max-sm:text-2xl">CEO of PARAFAM</h4>
        <p className="font-bold text-2xl mt-1  max-sm:text-xl">PARAFAM</p>
        <div className="flex space-x-2 my-2 justify-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="logo"
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... -Ended...
        </p>
        <ul className="space-y-4 ml-5 text-lg max-sm:space-y-1">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </div>
  );
}
