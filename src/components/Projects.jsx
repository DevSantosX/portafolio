import React, { useRef, useEffect, useState } from 'react';
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

const cards = [
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 7",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  },
  {
    img: "https://images.unsplash.com/photo-1657214059264-99456d9aae24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "Proyecto 8",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id quos possimus quis porro est quisquam doloremque cum error tenetur, mollitia maiores optio ipsum praesentium tempore neque numquam minima eaque?",
    git: "link",
    demo: "link"
  }
]

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
  }, [])

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
