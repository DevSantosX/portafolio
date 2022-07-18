import React, {  useEffect } from 'react';
import useObserver from '../hooks/useObserver';


const Card = ({thumbail, title, description, git, demo}) => {
  return (
    <div className="projects__card">
      <div className="projects__card-img">
        <img src={thumbail} alt={title} />
      </div>
      <div className="projects__card-description">
        <h3>{title}</h3>
        <div>
          <p>{description}</p>
        </div>
        {git && <a className='projects__card-demo' href={demo}>Demo</a> }
        {demo && <a className='projects__card-git' href={git}>Github</a>}
      </div>
    </div>
  )
}

const Projects = ({projects}) => {

  const [observador, setElements, entries] = useObserver({
    threshold: .25
  });

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target;
        cards.classList.add("projects__card-visible");
      } else {
        const cards = entry.target;
        cards.classList.remove("projects__card-visible");
      }
    })
  }, [entries, observador]);

  useEffect(() => {
    const cards = document.querySelectorAll(".projects__card");
    setElements(cards);
  }, [setElements])

  return (
    <div id='projects' className='projects'>
      <div className="container">
        <div className="content">
          <div className="projects__title">
            <h1>Projects</h1>
          </div>
          <div className="projects__content">
            {
              projects.map(card => {
                return <Card {...card} key={card.title} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
