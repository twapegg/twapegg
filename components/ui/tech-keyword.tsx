import React from "react";

interface TechKeywordProps {
  skill: string;
}

const TechKeyword: React.FC<TechKeywordProps> = ({ skill }) => {
  return (
    <span className="py-1 px-2 text-white/50  bg-grey/10 border  border-white/50 rounded-3xl text-sm">
      {skill}
    </span>
  );
};

export default TechKeyword;
