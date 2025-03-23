
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BrainCircuit, Sparkles, Github } from "lucide-react";
import Layout from "@/components/Layout";
import TypeWriter from "@/components/TypeWriter";
import QuoteGenerator from "@/components/QuoteGenerator";
import RepoCard, { RepoProps } from "@/components/RepoCard";

// Mock repos data
const mockRepos: RepoProps[] = [
  {
    name: "anime-style-portfolio",
    description: "My personal portfolio website with anime-inspired design",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    lastUpdated: "2 days ago",
    url: "https://github.com/username/anime-style-portfolio",
  },
  {
    name: "react-pixel-art-generator",
    description: "A pixel art creator built with React and HTML5 Canvas",
    language: "JavaScript",
    stars: 8,
    forks: 2,
    lastUpdated: "1 week ago",
    url: "https://github.com/username/react-pixel-art-generator",
  },
  {
    name: "neural-network-visualization",
    description: "Interactive visualization of neural networks for beginners",
    language: "Python",
    stars: 24,
    forks: 5,
    lastUpdated: "3 weeks ago",
    url: "https://github.com/username/neural-network-visualization",
  },
];

const Index = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [matrixChars, setMatrixChars] = useState<JSX.Element[]>([]);
  
  // Create matrix effect characters
  useEffect(() => {
    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const newMatrixChars: JSX.Element[] = [];
    
    for (let i = 0; i < 50; i++) {
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      const delay = Math.random() * 10;
      const duration = 5 + Math.random() * 10;
      const size = 10 + Math.floor(Math.random() * 16);
      const left = Math.random() * 100;
      const opacity = 0.3 + Math.random() * 0.5;
      
      newMatrixChars.push(
        <div 
          key={i}
          className="matrix-rain"
          style={{
            left: `${left}%`,
            fontSize: `${size}px`,
            opacity,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {char}
        </div>
      );
    }
    
    setMatrixChars(newMatrixChars);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 matrix-bg">
          {matrixChars}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="inline-block text-sm font-mono text-gray-400 border border-gray-800 rounded-full px-3 py-1 mb-4">
                &lt; Hello, World! /&gt;
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                I'm a
                <br />
                <span className="font-pixel">
                  <TypeWriter 
                    text="Coding Otaku" 
                    speed={80} 
                    delay={500}
                    onComplete={() => setTypingComplete(true)}
                    className="text-glow"
                  />
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg max-w-lg mb-8">
                Building the future with code, one line at a time. Passionate about
                blending anime aesthetics with programming to create unique digital experiences.
              </p>
              
              <div className={`flex flex-wrap gap-4 transition-opacity duration-500 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <Link
                  to="/projects"
                  className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                
                <Link
                  to="/contact"
                  className="flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <QuoteGenerator className="max-w-lg mx-auto lg:ml-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Github className="h-6 w-6" /> 
                Featured Repositories
              </h2>
              <p className="text-gray-400 mt-2">
                Check out some of my recent GitHub projects
              </p>
            </div>
            
            <Link
              to="/projects"
              className="group flex items-center gap-1 text-sm font-medium mt-4 md:mt-0"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRepos.map((repo, index) => (
              <RepoCard
                key={index}
                repo={repo}
                className="animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Overview */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-900/10 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-900/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold inline-flex items-center gap-2">
              <BrainCircuit className="h-6 w-6" />
              What I Do
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto">
              Combining creative design with technical skills to build engaging experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Coding */}
            <div className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-600 hover:bg-white/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mb-4">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-400">
                Creating responsive, user-friendly websites and applications with modern frameworks
                and clean code principles.
              </p>
            </div>
            
            {/* AI */}
            <div className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-600 hover:bg-white/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mb-4">
                <BrainCircuit className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-gray-400">
                Leveraging AI technologies to enhance projects, from chatbots
                to natural language processing and image recognition.
              </p>
            </div>
            
            {/* Design */}
            <div className="border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-gray-600 hover:bg-white/5">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mb-4">
                <Sparkles className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Design</h3>
              <p className="text-gray-400">
                Bringing projects to life with engaging visuals, animations, and 
                anime-inspired aesthetics that create memorable user experiences.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link
              to="/about"
              className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/10"
            >
              Learn more about me
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
