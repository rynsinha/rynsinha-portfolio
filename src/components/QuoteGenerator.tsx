
import React, { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const quotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
  { text: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.", author: "Mosher's Law of Software Engineering" },
  { text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
  { text: "The best way to predict the future is to implement it.", author: "David Heinemeier Hansson" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
];

interface QuoteGeneratorProps {
  className?: string;
}

const QuoteGenerator: React.FC<QuoteGeneratorProps> = ({ className }) => {
  const [quote, setQuote] = useState(quotes[0]);
  const [isLoading, setIsLoading] = useState(false);
  
  const getRandomQuote = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    setTimeout(() => {
      setQuote(quotes[randomIndex]);
      setIsLoading(false);
    }, 600);
  };
  
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className={cn("p-6 border border-gray-800 bg-black/50 backdrop-blur-sm rounded-lg", className)}>
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <blockquote className={cn("text-lg font-medium italic transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}>
            "{quote.text}"
          </blockquote>
          <footer className={cn("mt-3 text-sm text-gray-400 transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}>
            — <cite>{quote.author}</cite>
          </footer>
        </div>
        <button
          onClick={getRandomQuote}
          disabled={isLoading}
          className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-700 transition-all duration-300 hover:border-white hover:bg-white/10"
          aria-label="Get new quote"
        >
          <RefreshCw
            className={cn(
              "h-4 w-4",
              isLoading ? "animate-spin text-gray-400" : "text-gray-200"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
