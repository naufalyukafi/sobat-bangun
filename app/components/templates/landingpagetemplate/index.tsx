import React from "react";
import Navbar from "../../molecules/navbar";

const LandingPageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <div className="min-h-[100vh]">
        <h1 className="text-black text-7xl z-50">Footer</h1>
      </div>
    </div>
  );
};

export default LandingPageTemplate;
