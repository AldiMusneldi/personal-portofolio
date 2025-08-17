import React from "react";
import NavBar from "./NavBar";
import CvAldi from "../assets/CV-Aldi-Musneldi.pdf";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <NavBar />
      <main
        id="home"
        className="flex flex-col w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 md:text-left md:mt-20 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-lg sm:text-lg md:text-2lg font-bold text-white mb-4">
              Hello, <br />
              I'm Aldi Musneldi
            </h1>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              <TypeAnimation
                sequence={[
                  3000,

                  "AI Enthusiast",
                  200,
                  "",
                  500,
                  "FrontEn",
                  200,
                  "",
                  500,
                  "Front-End Developer",
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={0}
              />
            </h2>
          </header>
          <p className="text-white text-lg max-w-xl mb-8 pt-5">
            Bringing your digital vision to life through interactive,
            responsive, and engaging web interfaces. I thrive on exploring
            modern web animation technologies to create unforgettable
            experiences.
          </p>
          <div className="flex gap-4">
            {/* Button Download */}
            <a href={CvAldi} download>
              <button className="inline-flex text-white border-2 py-2 text-[14px] sm:text-lg px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
                Download CV
              </button>
            </a>
            {/* Button Lihat */}
            <a
              href="#projects"
              className="inline-flex  items-center gap-2 text-white border-2 py-2 px-6 rounded-full text-[14px] sm:text-lg hover:bg-zinc-500"
              loading="lazy"
              berhvuior
              smoot
            >
              Explore Projects
              <FiArrowDown className="animate-bounce" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
