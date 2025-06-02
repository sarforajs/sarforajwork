
import { Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Sarforaj Shaikh"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-6">
            Available for Work
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hi, I'm Sarforaj
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          DevOps Engineer & Backend Developer
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Motivated Computer Engineering graduate specializing in DevOps, cloud infrastructure, 
          and secure CI/CD pipelines. Currently pursuing Post Graduate Diploma in IT Infrastructure, 
          Systems, and Security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </a>
          
          <div className="flex gap-4">
            <a
              href="mailto:sarfarojsshaikh098@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg transition-colors duration-200"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href="tel:9325692110"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 rounded-lg transition-colors duration-200"
            >
              <Phone size={18} />
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
