import { Server, Settings, Code, Github } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "CI/CD Pipeline Setup",
      description: "Complete automation of build, test, and deployment processes using Jenkins, GitHub Actions, and industry best practices.",
      features: ["Jenkins automation", "GitHub Actions", "Automated testing", "Deployment strategies"]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Cloud Infrastructure",
      description: "AWS EC2 deployment and management, with expertise in scalable cloud architecture and security implementations.",
      features: ["AWS EC2 deployment", "Cloud architecture", "Security configuration", "Performance optimization"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Containerization",
      description: "Docker containerization and Kubernetes orchestration for scalable, portable application deployment.",
      features: ["Docker containers", "Kubernetes orchestration", "Container security", "Scalability planning"]
    },
    {
      icon: <Github className="w-12 h-12" />,
      title: "Infrastructure as Code",
      description: "Terraform infrastructure provisioning and Ansible configuration management for consistent, repeatable deployments.",
      features: ["Terraform provisioning", "Ansible automation", "Infrastructure versioning", "Configuration management"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">DevOps Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-md hover:shadow-lg hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-blue-600 text-sm">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200 shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Linux Administration</h4>
              <p className="text-gray-700 text-sm">System configuration, security hardening, and performance tuning</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Network Fundamentals</h4>
              <p className="text-gray-700 text-sm">Network configuration, security protocols, and troubleshooting</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Security Best Practices</h4>
              <p className="text-gray-700 text-sm">Cryptography implementation, vulnerability assessment, and compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
