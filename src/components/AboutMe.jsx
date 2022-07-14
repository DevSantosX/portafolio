import React from 'react';
import Speed from '../assets/img/speed-test.svg';

const AboutMe = () => {
  return (
    <div className='about'>
      <div className="about__container">
        <div className="about__content">
          <div className="about__specialties">
            <div>
              <div className='card__icon'>
                <i className='card__icon-img speed-icon'/>
              </div>
              <div>
                <h3>Rápido</h3>
                <p>Tiempos de carga rápidos e interacción sin demoras, mi máxima prioridad.</p>
              </div>
            </div>
            <div>
              <div className='card__icon'>
                <i className='card__icon-img responsive-icon'/>
              </div>
              <div>
                <h3>Responsivo</h3>
                <p>Mis diseños funcionarán en cualquier dispositivo, grande o pequeño.</p>
              </div>
            </div>
            <div>
              <div className='card__icon'>
                <i className='card__icon-img intuitive-icon'/>
              </div>
              <div>
                <h3>Intuitivo</h3>
                <p>Fuerte preferencia por una UX/UI intuitiva y fácil de usar.</p>
              </div>
            </div>
            <div>
              <div className='card__icon'>
                <i className='card__icon-img dynamic-icon'/>
              </div>
              <div>
                <h3>Dinámico</h3>
                <p>Los sitios web no tienen que ser estáticos, me encanta hacer que las páginas cobren vida.</p>
              </div>
            </div>
          </div>
          <div className="about__me">
            <div className="about__me-profile">
              <img className='about__me-img'/>
            </div>
          </div>
          <div className="about__skills"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
