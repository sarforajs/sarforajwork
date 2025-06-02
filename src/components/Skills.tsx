
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java"],
      color: "bg-green-500"
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "AWS EC2", "GitHub Actions"],
      color: "bg-blue-500"
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "System Administration", "Network Configuration"],
      color: "bg-purple-500"
    },
    {
      title: "Security & Backend",
      skills: ["Cryptography", "CI/CD Pipelines", "Backend Development", "Security Best Practices"],
      color: "bg-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-blue-400">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-white">DevOps Engineering</h4>
              <p className="text-gray-300 text-sm">
                Complete CI/CD pipeline development, infrastructure automation, and deployment strategies
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Cloud Infrastructure</h4>
              <p className="text-gray-300 text-sm">
                AWS deployment, scalable architecture design, and cloud security implementation
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Security Focus</h4>
              <p className="text-gray-300 text-sm">
                Cryptographic solutions, security best practices, and vulnerability assessment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
