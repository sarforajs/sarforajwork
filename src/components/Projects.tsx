import React from 'react';

const projects = [
  {
    title: "Crypto File Encryptor",
    description: "Encrypt/decrypt files using AES encryption in Spring Boot. Secured with password hashing and Dockerized for deployment.",
    tech: "Spring Boot, AES, Docker, Jenkins, SonarQube",
    github: "https://github.com/sarforajs/crypto",
    live: "",
  },
  {
    title: "DevOps Portfolio Site",
    description: "My personal portfolio built with Vite, Tailwind, and custom React components.",
    tech: "React, Vite, Tailwind CSS",
    github: "https://github.com/sarforajs/sarforajwork",
    live: "https://sarforajwork.online",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">Tech: {project.tech}</p>
            <div className="flex gap-4">
              <a href={project.github} className="text-blue-600 hover:underline" target="_blank">GitHub</a>
              {project.live && (
                <a href={project.live} className="text-blue-600 hover:underline" target="_blank">Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
