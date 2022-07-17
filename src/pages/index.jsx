import React from "react"
import Heroimage from "../components/HeroImage";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Loader from '../components/Loader';

export default function Home() {
  return (
    <>
      <Heroimage />
      <div className="home__container">
        <div className="home__content">
          <AboutMe/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}
