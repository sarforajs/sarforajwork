import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import Navigation from "@/components/Navigation"; // Changed here

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
