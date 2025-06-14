const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">
              Motivated & Detail-Oriented Professional
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a motivated and detail-oriented Computer Engineering graduate, I am currently 
              pursuing a Post Graduate Diploma in IT Infrastructure, Systems, and Security from 
              CDAC - IACSD. My passion lies in DevOps, backend development, and cloud infrastructure.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in building secure CI/CD pipelines, deploying applications on AWS, 
              and implementing robust cryptographic solutions. While I'm a fresher in the industry, 
              I bring strong project experience and a commitment to excellence in every task.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I thrive in dynamic IT environments and am eager to contribute to innovative 
              projects that push the boundaries of technology and security.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-blue-600">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900">Post Graduate Diploma in IT Infrastructure, Systems, and Security</h5>
                  <p className="text-gray-600">CDAC - IACSD (Current)</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Bachelor of Engineering - Computer Engineering</h5>
                  <p className="text-gray-600">NBN Sinhgad Technical Institutes Campus (2024)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold mb-4 text-blue-600">Focus Areas</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• DevOps & CI/CD Pipeline Development</li>
                <li>• Cloud Infrastructure (AWS)</li>
                <li>• Backend Development</li>
                <li>• Cryptographic Solutions</li>
                <li>• System Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
