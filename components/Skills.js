import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills({  }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className=" absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-3 gap-5 mt-8 p-6">
        <Skill
          skill={"98"}
          src="https://www.ravedigital.agency/wp-content/uploads/2015/06/html51.jpg"
          
        />
        <Skill
          skill={"95"}
          src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
        />
        <Skill
          skill={"92"}
          src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"
        />
        <Skill
          skill={"100"}
          src={"https://res.cloudinary.com/practicaldev/image/fetch/s--ktYESCeQ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg"}
        />
        <Skill
          skill={"96"}
          src="https://miro.medium.com/max/1200/1*yUNfohs9jA6GCDmyCYJTvA@2x.png"
        />
        <Skill skill={"97"} src="https://reactjs.org/logo-og.png" />
        <Skill
          skill={"100"}
          src="https://www.howtogeek.com/wp-content/uploads/2022/08/github_hero_2.jpg?height=200p&trim=2,2,2,2"
        />
        <Skill
          skill={77}
          src={"https://ih1.redbubble.net/image.489553241.2202/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"}
        />
        <Skill
          skill={"98"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJCHDZmwelieh53k3nADoFtiiCLyneTP1GuNf-puVAZEDPlSXqZBZ9o6fXOft00dwdjc&usqp=CAU"
        />
      </div>
    </motion.div>
  );
}

export default Skills;
