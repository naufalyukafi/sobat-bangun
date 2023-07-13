import React from "react";

const Card = ({
  children,
  maxW = "sm",
}: {
  children: React.ReactNode;
  maxW?: string;
}) => {
  return (
    <div className={`border border-gray-200 p-4 max-w-${maxW}`}>{children}</div>
  );
};

export default Card;
