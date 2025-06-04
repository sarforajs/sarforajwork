import React from "react";
import { Github, Code, Settings } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Cryptography Web Application",
      description:
        "A comprehensive Spring Boot application featuring file encryption and decryption using PBKDF2 + AES encryption. Built with a complete CI/CD pipeline including Docker, Jenkins, SonarQube, Trivy, and GitHub Actions.",
      technologies: [
        "Spring Boot",
        "Java",
        "Docker",
        "Jenkins",
        "AWS EC2",
        "SonarQube",
        "Trivy",
        "GitHub Actions",
      ],
      features: [
        "PBKDF2 + AES encryption implementation",
        "Complete CI/CD pipeline automation",
        "AWS EC2 deployment",
        "Security scanning with Trivy",
        "Code quality analysis with SonarQube",
        "Future Kubernetes and Terraform integration planned",
      ],
      icon: <Settings className="w-8 h-8 text-blue-600" aria-hidden="true" />,
    },
    {
      title: "CRM Web Application",
      description:
        "A full-stack Customer Relationship Management system developed for an NGO during engineering studies. Features comprehensive contact management and communication tracking capabilities.",
      technologies: [
        "Backend Development",
        "Frontend Integration",
        "Database Management",
        "Web Technologies",
      ],
      features: [
        "Contact management system",
        "Communication tracking",
        "User-friendly interface",
        "Database integration",
        "NGO-specific workflow optimization",
      ],
      icon: <Code className="w-8 h-8 text-blue-600" aria-hidden="true" />,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div>{project.icon}</div>
                <h3
                  id={`project-title-${index}`}
                  className="text-2xl font-bold text-gray-900"
                >
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              <section className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-600">
                  Key Features:
                </h4>
                <ul className="space-y-2 list-disc list-inside text-gray-700 text-sm">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
