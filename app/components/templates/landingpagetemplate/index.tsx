import React from "react";
import Navbar from "../../molecules/navbar";
import Footer from "../../molecules/foooter";

const LandingPageTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;
