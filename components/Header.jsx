import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header
      className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/asadbekDeV01"
          fgColor="gray"
          network="github"
          bgColor="transparent"
          className="hover:scale-110 hover:translate-y-2 transition-all "
        />
        <SocialIcon
          url="https://t.me/o1_Asadbekk"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-110 hover:translate-y-2 transition-all"
        />
        <SocialIcon
          url="https://www.instagram.com/asadbek_176/"
          fgColor="gray"
          bgColor="transparent"
          className="hover:scale-110 hover:translate-y-2 transition-all"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row mr-4 items-center hover:text-white text-gray-300 cursor-pointer "
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden md:inline-flex text-sm hover:text-white text-gray-400">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}
