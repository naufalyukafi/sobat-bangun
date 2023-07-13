import React from "react";

const Stack = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap: number;
}) => {
  return (
    <div className={`flex items-center align-middle gap-${gap}`}>
      {children}
    </div>
  );
};

export default Stack;
