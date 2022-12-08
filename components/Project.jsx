import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex owerflow-hidden flex-col text-left md:flex-row
  max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-10 max-sm:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex scrollbar-thin scrollbar-track-gray-400/20 z-20
     scrollbar-thumb-[#F7AB0A]/80 overflow-y-hidden snap-x
      snap-mandatory  "
      >
        {projects.map((Project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt="Apple"
            />
            <div className="space-y-10 max-sm:space-y-4 max-sm:max-w-2xl px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl max-sm:text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A] ">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left max-sm:text-sm">
                Netflix 2.0 app that has a Log In and Log Out Authentication
                with Google.It has a beatiful Home Screen with all the movies
                looking just like Netflix.There is also a subscribtion.We also
                use Stripe Payments for the montly Netflix Subscribtion!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
    -skew-y-12"
      />
    </motion.div>
  );
}

export default Project;
