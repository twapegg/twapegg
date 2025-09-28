import React from "react";

interface TechKeywordProps {
  skill: string;
}

const TechKeyword: React.FC<TechKeywordProps> = ({ skill }) => {
  return (
    <span className="py-2 px-3 text-white/90 bg-white/10 border border-white/30 rounded-full text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-200">
      {skill}
    </span>
  );
};

export default TechKeyword;
