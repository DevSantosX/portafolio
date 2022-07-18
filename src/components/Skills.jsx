import React from 'react';

const Skill = (props) => {
  const  {title, label, porcent} = props
  return (
    <li id={title} className='skills__item'>
      <div className='skills__item-lb'>
        <img src={label} alt={title} />
      </div>

      <div className='skills__item-bar'>
        <div></div>
      </div>
      <span className='skills__item-tag'>{porcent}</span>
    </li>
  )
}



const Skills = ({ skills }) => {
  return (
    <>
      <div className="skills">
        <div className="skills__title">
          <h1>Skills</h1>
        </div>
        <div className="skills__content">
          <ul>
            {skills.map(item => {
              return <Skill key={item.title} title={item.title} label={item.icon} porcent={item.porcent}/>
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
