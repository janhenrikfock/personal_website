import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import FeaturedProject from './FeaturedProject/FeaturedProject'
import Skills from './Skills/Skills'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedProject />
        <Skills />
      </main>
    </div>
  )
}
