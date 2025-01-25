import React from "react";

interface MathProps {
  children: string;
}

export const MathBlock: React.FC<MathProps> = ({ children }) => {
  return <div className="flex justify-center align-center">{children}</div>;
};
