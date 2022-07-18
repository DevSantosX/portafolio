import React from 'react';
import Skills from './Skills';



const AboutMe = ({offer, description, fullname, skills, avatar}) => {
  return (
    <div id='about' className='about'>
      <div className="about__container">
        <div className="about__content">
          <div className='about__title'>
            <h1>About</h1>
          </div>
          <div className="about__specialties">
            {
              offer.map(el => {
                return (
                  <div key={el.title}>
                    <div className='card__icon'>
                      <i className={'card__icon-img ' + el.icon }/>
                    </div>
                    <div>
                      <h3>{el.title}</h3>
                      <p>{el.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="about__me">
            <div className='about__me-content'>
              <div className="about__me-profile">
                <img className='about__me-img' src={avatar} alt='me'/>
              </div>
              <div className='about__me-text'>
                <h3>{fullname}</h3>
                <p>{description}</p>
              </div>
            </div>
            <Skills skills={skills}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
