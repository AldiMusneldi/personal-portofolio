import React from "react";
import imghero from "../assets/aldi.png";
import { listTools } from "../Data/dataTools";

export default function About() {
  return (
    <section id="about" className="min-h-screen text-white px-4 sm:px-6 py-12">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex justify-center relative"
        >
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full" />
          <img
            src={imghero}
            alt="about"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 object-cover"
          />
        </figure>
        <article
          data-aos="fade-up"
          data-aos-delay="500"
          className="lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            I am a fresh graduate of <strong>Informatics Engineering</strong>{" "}
            from UPI YPTK Padang. As a <strong>Front-End Develope</strong>r, I
            focus on creating beautiful, intuitive, and responsive user
            interfaces. My goal is to transform design concepts and business
            needs into seamless and accessible web experiences.
            <br />
            <br />I have hands-on experience with <strong>ReactJS</strong> for
            frontend development and <strong>Flutter</strong> for mobile.
            Additionally, I am passionate about exploring modern web animation
            technologies to create unforgettable user experiences.
          </p>
          <blockquote className="-mt-3 italic text-md relative">
            “In programming, the hard part isn’t solving problems, but deciding
            what problems to solve.”
            <footer className="inline-block pl-2 text-xs text-gray-400">
              — Paul Graham
            </footer>
          </blockquote>
        </article>

        {/* Tools yang digunakan */}
        <div className="tools sm:-mt-10 lg:col-span-2">
          <p
            className="text-base/relaxed sm:text-lg md:text-xl max-w-2xl lg:ml-auto lg:text-right"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Here is the stack of technologies that I use :
          </p>
          {/* atur grid cards tools */}
          <div className="tools-box mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:flex lg:justify-end">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                data-aos="fade-up"
                data-aos-delay={Number(tool.dad)}
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-12 h-12 rounded-md object-contain bg-zinc-900 p-2"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold">{tool.nama}</h4>
                  <p className="text-xs text-zinc-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
