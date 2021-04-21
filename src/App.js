import styled from 'styled-components/macro'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import FeaturedProject from './FeaturedProject/FeaturedProject'
import TechStack from './TechStack/TechStack'

export default function App() {
  return (
    <AppContainer>
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <TechStack />
      </main>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  text-align: center;
`
