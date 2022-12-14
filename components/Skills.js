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
          src="https://www.manejandodatos.es/wp-content/uploads/2013/07/html5_logo.png"
        />
        <Skill
          skill={"95"}
          src="https://i.ytimg.com/vi/OEV8gMkCHXQ/maxresdefault.jpg"
        />
        <Skill
          skill={"92"}
          src="https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"
        />
        <Skill
          skill={"100"}
          src="data:image/jpeg;base64,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"
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
          skill={90}
          src="data:image/png;base64,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"
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
