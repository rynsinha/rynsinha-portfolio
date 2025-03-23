
import React from "react";
import { Code, BrainCircuit, Sparkles, Bot, Laptop, Gamepad } from "lucide-react";
import Layout from "@/components/Layout";
import SkillBadge from "@/components/SkillBadge";
import TypeWriter from "@/components/TypeWriter";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "React", level: 3 },
    { name: "TypeScript", level: 2 },
    { name: "Node.js", level: 2 },
    { name: "Python", level: 3 },
    { name: "Git", level: 3 },
    { name: "UI/UX", level: 2 },
    { name: "AI Tools", level: 4 },
  ];

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 pt-10">
          <div className="max-w-4xl mx-auto">
            <p className="inline-block font-mono text-sm text-gray-400 border border-gray-800 rounded-full px-3 py-1 mb-4">
              &lt; about-me /&gt;
            </p>
            <h1 className="text-4xl font-bold mb-6">
              Hello, I'm 
              <span className="font-pixel ml-2 text-glow">
                <TypeWriter text="Code Otaku" speed={80} />
              </span>
            </h1>
            
            <div className="mt-8 prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate developer who combines my love for coding with anime aesthetics. As a beginner
                on this exciting journey, I'm constantly learning and improving my skills to create unique
                digital experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My interest in programming started when I realized I could create the same kind of interactive 
                experiences that I enjoyed in games and websites. What began as curiosity has evolved into a 
                passionate pursuit of knowledge and creativity.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me watching anime, sketching, or playing video games
                that inspire my next project. I believe in learning by doing and sharing knowledge with
                the community.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Code className="h-6 w-6" />
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              I'm constantly learning and expanding my toolkit with new technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <SkillBadge
                key={index}
                name={skill.name}
                level={skill.level}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-900/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
              <Laptop className="h-6 w-6" />
              My Coding Journey
            </h2>
            
            <div className="space-y-12">
              <div className="relative pl-10 border-l border-gray-800">
                <div className="absolute top-0 left-0 w-5 h-5 -translate-x-1/2 rounded-full bg-white"></div>
                <div className="mb-2 text-xl font-semibold">The Beginning</div>
                <p className="text-gray-400">
                  Started with HTML, CSS, and basic JavaScript, creating small projects and learning
                  fundamental web development concepts.
                </p>
              </div>
              
              <div className="relative pl-10 border-l border-gray-800">
                <div className="absolute top-0 left-0 w-5 h-5 -translate-x-1/2 rounded-full bg-white"></div>
                <div className="mb-2 text-xl font-semibold">Expanding Horizons</div>
                <p className="text-gray-400">
                  Explored frameworks like React and started learning backend technologies.
                  Participated in coding challenges and built more complex applications.
                </p>
              </div>
              
              <div className="relative pl-10 border-l border-gray-800">
                <div className="absolute top-0 left-0 w-5 h-5 -translate-x-1/2 rounded-full bg-white"></div>
                <div className="mb-2 text-xl font-semibold">AI Integration</div>
                <p className="text-gray-400">
                  Discovered AI tools and technologies, learning how they can enhance projects
                  and streamline development workflows.
                </p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute top-0 left-0 w-5 h-5 -translate-x-1/2 rounded-full bg-white"></div>
                <div className="mb-2 text-xl font-semibold">Current Focus</div>
                <p className="text-gray-400">
                  Building a portfolio of projects that combine technical skills with creative design,
                  while continuing to learn new technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Gamepad className="h-6 w-6" />
              Interests & Inspiration
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Beyond coding, here are some things that inspire my work and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-600 hover:bg-white/5">
              <h3 className="text-xl font-bold mb-3">Anime & Manga</h3>
              <p className="text-gray-400">
                I draw inspiration from anime art styles, storytelling, and thematic elements,
                incorporating them into my design work and projects.
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-600 hover:bg-white/5">
              <h3 className="text-xl font-bold mb-3">Game Development</h3>
              <p className="text-gray-400">
                Fascinated by the mechanics and design of games, I explore concepts that can be
                applied to web applications to make them more engaging.
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-600 hover:bg-white/5">
              <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">
                I'm excited by the possibilities AI offers and how it can be integrated with
                traditional development to create innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collaboration Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Bot className="h-10 w-10 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Let's Collaborate!</h2>
            <p className="text-gray-400 text-lg mb-8">
              I'm always open to new opportunities, collaborations, and learning experiences.
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
