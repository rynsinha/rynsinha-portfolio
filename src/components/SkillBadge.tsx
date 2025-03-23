
import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level: number; // 1-5
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, className }) => {
  return (
    <div className={cn(
      "flex flex-col items-center p-3 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-600 hover:bg-white/5",
      className
    )}>
      <div className="font-medium mb-2">{name}</div>
      <div className="flex gap-1">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1.5 w-4 rounded-full transition-all duration-300",
                index < level ? "bg-white" : "bg-gray-700"
              )}
            />
          ))}
      </div>
    </div>
  );
};

export default SkillBadge;
