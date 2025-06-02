
import { Github, Code, Settings } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Cryptography Web Application",
      description: "A comprehensive Spring Boot application featuring file encryption and decryption using PBKDF2 + AES encryption. Built with a complete CI/CD pipeline including Docker, Jenkins, SonarQube, Trivy, and GitHub Actions.",
      technologies: ["Spring Boot", "Java", "Docker", "Jenkins", "AWS EC2", "SonarQube", "Trivy", "GitHub Actions"],
      features: [
        "PBKDF2 + AES encryption implementation",
        "Complete CI/CD pipeline automation",
        "AWS EC2 deployment",
        "Security scanning with Trivy",
        "Code quality analysis with SonarQube",
        "Future Kubernetes and Terraform integration planned"
      ],
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "CRM Web Application",
      description: "A full-stack Customer Relationship Management system developed for an NGO during engineering studies. Features comprehensive contact management and communication tracking capabilities.",
      technologies: ["Backend Development", "Frontend Integration", "Database Management", "Web Technologies"],
      features: [
        "Contact management system",
        "Communication tracking",
        "User-friendly interface",
        "Database integration",
        "NGO-specific workflow optimization"
      ],
      icon: <Code className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-blue-400">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
