import Image from "next/image";
import LandingPageTemplate from "./components/templates/landingpagetemplate";
import Hero from "./components/molecules/hero";

export default function Home() {
  return (
    <LandingPageTemplate>
      <Hero />
    </LandingPageTemplate>
  );
}
