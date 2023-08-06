import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import WorkExperiense from "../components/WorkExperiense";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory max-sm:scrollbar-none
     overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 z-0 scrollbar-corner-blue-300
     scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Asadbek Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperiense />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Project />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 max-sm:bottom-14 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <Image
            width={200}
            height={200}
              className="h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer "
              src="/myimage.jpg"
              alt="weadadada"
            />
          </Link>
         
        </div>
      </footer>
    </div>
  );
}
