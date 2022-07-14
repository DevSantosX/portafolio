import React from "react"
import Heroimage from "../components/HeroImage";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <>
      <Heroimage />
      <div className="home__container">
        <div className="home__content">
          <AboutMe/>
        </div>
      </div>
    </>
  );
}
