
import React from "react";
import { Github, Star, GitFork, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RepoProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  url: string;
}

interface RepoCardProps {
  repo: RepoProps;
  className?: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, className }) => {
  const getLanguageColor = (lang: string): string => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Java: "bg-red-600",
      "C++": "bg-purple-600",
      HTML: "bg-orange-600",
      CSS: "bg-blue-400",
      Ruby: "bg-red-500",
      Go: "bg-blue-300",
      Rust: "bg-orange-800",
    };
    
    return colors[lang] || "bg-gray-500";
  };

  return (
    <a 
      href={repo.url}
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group block p-5 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-600 hover:bg-white/5 tilt-on-hover",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Github className="h-5 w-5 text-gray-400" />
            <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
              {repo.name}
            </h3>
          </div>
          <p className="mt-2 text-gray-400 line-clamp-2">{repo.description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <span className={cn("h-3 w-3 rounded-full", getLanguageColor(repo.language))}></span>
          <span>{repo.language}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          <span>{repo.stars}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <GitFork className="h-4 w-4" />
          <span>{repo.forks}</span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        Updated: {repo.lastUpdated}
      </div>
    </a>
  );
};

export default RepoCard;
