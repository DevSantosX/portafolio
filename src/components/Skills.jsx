import React from 'react';

import ReactIcon from '../assets/img/react-js.svg';
import VueIcon from '../assets/img/vue-js.svg';
import ExpressIcon from '../assets/img/expressjs.svg';
import GatsbyIcon from '../assets/img/gatsbyjs.svg';
import JavaScriptIcon from '../assets/img/javascript-programming-language.svg';
import NodeIcon from '../assets/img/node-js.svg';
import CssIcon from '../assets/img/css.svg';
import DockerIcon from '../assets/img/docker.svg';
import SassIcon from '../assets/img/sass.svg';

const Skill = (props) => {
  const  {id, label, porcent} = props
  return (
    <li id={id} className='skills__item'>
      <div className='skills__item-lb'>
        <img src={label} alt="" />
      </div>

      <div className='skills__item-bar'>
        <div></div>
      </div>
      <span className='skills__item-tag'>{porcent}</span>
    </li>
  )
}

const skills = [
  { id: "skill-html", label: ReactIcon, porcent: "100%" },
  { id: "skill-css", label: CssIcon, porcent: "70%" },
  { id: "skill-sass", label: SassIcon, porcent: "70%" },
  { id: "skill-javascript", label: JavaScriptIcon, porcent: "80%" },
  { id: "skill-node", label: NodeIcon, porcent: "50%" },
  { id: "skill-react", label: ReactIcon, porcent: "70%" },
  { id: "skill-gatsby", label: GatsbyIcon, porcent: "80%" },
  { id: "skill-express", label: ExpressIcon, porcent: "90%" },
  { id: "skill-vue", label: VueIcon, porcent: "30%" },
  { id: "skill-docker", label: DockerIcon, porcent: "90%" },
]

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills__title">
          <h1>Skills</h1>
        </div>
        <div className="skills__content">
          <ul>
            {skills.map(item => {
              return <Skill id={item.id} label={item.label} porcent={item.porcent}/>
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
