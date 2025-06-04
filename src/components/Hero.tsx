import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 text-center"
    >
      <img
        src="/lovable-uploads/aaf5ba4e-b8eb-4148-91fe-0bebe16b4468.png"
        alt="Sarforaj Shaikh"
        className="w-40 h-40 rounded-full shadow-lg mb-4 border-4 border-blue-600"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-3">Hi, I’m Sarforaj</h1>
      <p className="text-xl md:text-2xl font-light">
        DevOps Engineer | Cybersecurity Enthusiast | CI/CD Automation Lover 🚀
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded-xl text-white hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
