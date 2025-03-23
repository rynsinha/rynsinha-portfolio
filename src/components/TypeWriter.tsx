
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  className,
  speed = 50,
  delay = 0,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (!started) {
      timer = setTimeout(() => {
        setStarted(true);
      }, delay);
    } else if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (onComplete) {
      timer = setTimeout(() => {
        onComplete();
      }, 500);
    }
    
    return () => clearTimeout(timer);
  }, [currentIndex, delay, onComplete, speed, started, text]);

  return (
    <span className={cn("font-mono relative", className)}>
      {displayText}
      <span className="inline-block w-2 h-5 ml-1 bg-primary animate-blink"></span>
    </span>
  );
};

export default TypeWriter;
