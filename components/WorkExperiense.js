import React from "react";
import { motion } from "framer-motion";
import ExperienseCard from "./ExperienseCard";



const WorkExperiense = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen mt-20 flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute cursor-pointer top-2  uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiense
      </h3>

      <div className="w-full flex space-x-5 scrollbar scrollbar-track-gray-400/20 
     scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienseCard src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg "/>
        <ExperienseCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnc0uDKIZNYX3XxzASmrLD7-PTnd6CYlvokQ&usqp=CAU"/>
        <ExperienseCard src="https://aoltoronto.com/images/SOFTWARE_WEB_DEVELOPER.jpg"/>
        <ExperienseCard src="https://youteam.io/blog/wp-content/uploads/2021/07/web-developer-min-1.jpeg"/>
      </div>
    </motion.div>
  );
};
export default WorkExperiense;
