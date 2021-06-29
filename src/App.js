import { useRef } from 'react'
import styled from 'styled-components/macro'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import FeaturedProject from './FeaturedProject/FeaturedProject'
import TechStack from './TechStack/TechStack'
import { learning } from './Data/ProjectData'
import { featuredProjects } from './Data/ProjectData'
import Project from './Projects/Projects'

export default function App() {
  const projectRef = useRef(null)
  const techStackRef = useRef(null)
  const learningRef = useRef(null)

  return (
    <AppContainer>
      <Header
        projectRef={projectRef}
        techStackRef={techStackRef}
        learningRef={learningRef}
      />
      <main>
        <Hero />
        <div ref={projectRef}>
          {featuredProjects.map((featuredProject) => (
            <FeaturedProject
              featuredProject={featuredProject}
              key={featuredProject.title}
            />
          ))}
        </div>
        <TechStack ref={techStackRef} />
        <div ref={learningRef}>
          {learning.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </main>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  text-align: center;
`
