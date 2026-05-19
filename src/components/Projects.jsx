// Projects.jsx

import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants";


const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-white/30 hover:text-white-100 uppercase tracking-[0.3em] text-sm mb-4">
           Work
          </p>

          <h1 className="text-5xl md:text-7xl font-bold projectheading">
            Featured Projects
          </h1>
        </div>

        {/* MAP PROJECTS */}
        <div className="space-y-16 max-w-full">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              type={project.type}
              tech={project.tech}
              image={project.image}
              githubLink={project.githubLink}
              projectLink={project.projectLink}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;