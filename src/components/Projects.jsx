import React from "react";
import projectsData from "../Data/projectsData";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/* Icons */
const gitHub = <FaGithub />;
const arrowLink = <FaArrowUpRightFromSquare />;

export default function Projects() {
  return (
    <section id="projects">
      <div className="text-white">
        <h1 className="text-center text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-base/loose text-center opacity-50">
          A look into some of the things I've built.
        </p>

        {/* Cards */}
        <div className="my-projects mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 auto-rows-fr">
          {projectsData.map((projects, index) => {
            return (
              <article
                key={projects.id ?? index}
                className="flex h-full flex-col rounded-2xl bg-zinc-800/90 p-5 ring-1 ring-white/10 shadow-lg"
              >
                {/* preview image */}
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl ring-1 ring-white/10 bg-black/10">
                  <div className="relative w-full pb-[56%]">
                    <img
                      src={projects.img}
                      alt={`${projects.name} preview`}
                      className="absolute inset-0 h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h2 className="mt-6 text-center text-2xl font-semibold">
                  {projects.name}
                </h2>

                <p className="mx-auto mt-2 max-w-prose text-center text-sm leading-relaxed text-zinc-300 text-pretty">
                  {projects.description}
                </p>

                {/* tech stack yang digunakan*/}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {projects.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* button */}
                <div className="mt-auto flex justify-center gap-3 pt-6">
                  <a
                    href={projects.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <span>Lihat Preview</span>
                    <span className="shrink-0">{arrowLink}</span>
                  </a>

                  <a
                    href={projects.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-violet-300 ring-1 ring-violet-500/40 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <span>GitHub</span>
                    <span className="shrink-0">{gitHub}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
