import { useRef } from 'react'
import styled from 'styled-components/macro'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import FeaturedProject from './FeaturedProject/FeaturedProject'
import TechStack from './TechStack/TechStack'
import { learning } from './Data/ProjectData'
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
        <FeaturedProject ref={projectRef} />
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
