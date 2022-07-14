import React from "react"
import Heroimage from "../components/HeroImage";
import ReactIcon from '../assets/img/react-js.svg';
import VueIcon from '../assets/img/vue-js.svg';
import ExpressIcon from '../assets/img/expressjs.svg';
import GatsbyIcon from '../assets/img/gatsbyjs.svg';
import JavaScriptIcon from '../assets/img/javascript-programming-language.svg';
import NodeIcon from '../assets/img/node-js.svg';
import Iconslinks from "../components/IconsLinks";
import AboutMe from "../components/AboutMe";


export default function Home() {
  return (
    <>
      <Heroimage />
      <div className="home__container">
        <div className="home__content">
          <AboutMe/>
          <section className="tecnologias">
            <h1>Tecnologías</h1>
            <section className="tecnologias-content">
              <Iconslinks icon={JavaScriptIcon} alt="react icon" link={'https://es.reactjs.org/'} />
              <Iconslinks icon={ReactIcon} alt="react icon" link={'https://es.reactjs.org/'} />
              <Iconslinks icon={VueIcon} alt="react icon" link={'https://es.reactjs.org/'} />
              <Iconslinks icon={NodeIcon} alt="react icon" link={'https://es.reactjs.org/'} />
              <Iconslinks icon={GatsbyIcon} alt="react icon" link={'https://es.reactjs.org/'} />
              <Iconslinks icon={ExpressIcon} alt="react icon" link={'https://es.reactjs.org/'} />
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
