
import React, { useState } from "react";
import { Github, Search, Code, Star, GitFork, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import RepoCard, { RepoProps } from "@/components/RepoCard";

// Mock repositories data
const allRepos: RepoProps[] = [
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
  {
    name: "anime-recommendation-engine",
    description: "ML-based anime recommendation system using collaborative filtering",
    language: "Python",
    stars: 15,
    forks: 4,
    lastUpdated: "1 month ago",
    url: "https://github.com/username/anime-recommendation-engine",
  },
  {
    name: "manga-translation-tool",
    description: "Tool for translating manga text using OCR and machine translation",
    language: "Python",
    stars: 31,
    forks: 8,
    lastUpdated: "2 months ago",
    url: "https://github.com/username/manga-translation-tool",
  },
  {
    name: "css-animation-library",
    description: "Collection of reusable CSS animations for web projects",
    language: "CSS",
    stars: 7,
    forks: 1,
    lastUpdated: "3 months ago",
    url: "https://github.com/username/css-animation-library",
  },
  {
    name: "discord-bot-template",
    description: "Simple, customizable Discord bot template for beginners",
    language: "JavaScript",
    stars: 18,
    forks: 7,
    lastUpdated: "4 months ago",
    url: "https://github.com/username/discord-bot-template",
  },
  {
    name: "pixel-weather-app",
    description: "Weather app with pixel art visuals and animations",
    language: "JavaScript",
    stars: 11,
    forks: 2,
    lastUpdated: "5 months ago",
    url: "https://github.com/username/pixel-weather-app",
  },
];

const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Python",
  "CSS",
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredRepos = allRepos.filter((repo) => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          repo.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || repo.language === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 pt-10 relative z-10">
          <div className="text-center mb-16">
            <h1 className="inline-flex items-center text-4xl font-bold mb-4">
              <Github className="mr-2 h-8 w-8" />
              My Projects
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore my GitHub repositories and coding projects. From web applications to machine learning models,
              these are the projects I've been working on.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="w-full py-3 pl-10 pr-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-white text-black" 
                      : "border border-gray-800 hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredRepos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <RepoCard
                  key={index}
                  repo={repo}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-gray-800 rounded-lg">
              <Code className="h-10 w-10 mx-auto text-gray-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">No repositories found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              View All on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
