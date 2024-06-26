import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I've crafted a collection of dynamic web applications leveraging the
            power of React.js and Firebase backend. With a keen eye for user
            experience, I've seamlessly integrated state management using
            Context API or Redux. Each project showcases my proficiency in
            crafting responsive designs, whether through Bootstrap CSS or
            Tailwind CSS
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/2 p-4" // Adjust width based on screen size
            >
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-100 hover:opacity-0"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-800 bg-gray-900 opacity-100 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
