import React from "react"
import Heroimage from "../components/HeroImage";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { graphql } from "gatsby";

export const query = graphql`
query MyData {
  allContentJson {
    edges {
      node {
        myInfo {
          username
          fullname
          description
        }
        about {
          offer {
            title
            description
            icon
          }
          skills {
            title
            porcent
            icon
          }
        }
        projects {
          title
          description
          thumbail
          git
          demo
        }
      }
    }
  }
}
`

export default function Home({ data }) {

  const {myInfo, about, projects} = data.allContentJson.edges[0].node;

  return (
    <>
      <Heroimage username={myInfo.username}/>
      <div className="home__container">
        <div className="home__content">
          <AboutMe {...about} {...myInfo}/>
          <Projects projects={projects} />
          <Contact/>
        </div>
      </div>
    </>
  );
}
