import React from "react";
import Navbar from "../../molecules/navbar";

const LandingPageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <h1>Footer</h1>
    </div>
  );
};

export default LandingPageTemplate;
