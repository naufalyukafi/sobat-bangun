import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border border-gray-200 p-4 max-w-xs">{children}</div>;
};

export default Card;
