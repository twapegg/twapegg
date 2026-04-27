import React from "react";

interface TechKeywordProps {
  skill: string;
}

const TechKeyword: React.FC<TechKeywordProps> = ({ skill }) => {
  return (
    <span className="py-1.5 px-2.5 text-navy bg-navy/10 border border-navy/45 rounded-full text-xs font-medium hover:bg-navy/20 hover:border-navy/70 transition-all duration-200">
      {skill}
    </span>
  );
};

export default TechKeyword;
