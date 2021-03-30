import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import FeaturedProject from './FeaturedProject/FeaturedProject'
import TechStack from './TechStack/TechStack'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <TechStack />
      </main>
    </div>
  )
}
