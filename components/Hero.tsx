'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The Name's Asadbek",
      "Guy-who-loves-Coffe.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
     <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/my_image.png"
        alt="my"
        width={100}
        height={100}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {" "}
          {""}Asadbek
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibolt px-10 sm:px-5 sm:text-xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>
        <div className="pt-6 ">
          <Link className="heroButton border" href="#about">
            About
          </Link>
          <Link className="heroButton border" href="#experience">
            Experience
          </Link>
          <Link className="heroButton border" href="#skills">
            Skills
          </Link>
          <Link className="heroButton border" href="#projects">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
