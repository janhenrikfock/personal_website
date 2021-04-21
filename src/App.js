import styled from 'styled-components/macro'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import FeaturedProject from './FeaturedProject/FeaturedProject'
import TechStack from './TechStack/TechStack'
import AboutMe from './AboutMe/AboutMe'

export default function App() {
  return (
    <AppContainer>
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <TechStack />
        <AboutMe />
      </main>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  text-align: center;
`
