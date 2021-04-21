import styled from 'styled-components/macro'
import html_css_js from '../images/html_css_js.svg'
import react_icon from '../images/react_icon.svg'
import nodejs_icon from '../images/nodejs_icon.svg'

export default function TechStack() {
  return (
    <SkillsSection>
      <SkillList>
        <SkillCard>
          <IconContainerOne>
            <img src={html_css_js} alt="Tech-Icons" />
          </IconContainerOne>
          <h3>HTML CSS JS</h3>
          <p>HTML und CSS zusammen mit JavaScript auf Basis EcmaScript2020.</p>
          <p>
            Grundlagen des Komponentanbasierten arbeitens mit Queryselector.
          </p>
        </SkillCard>
        <SkillCard>
          <IconContainer>
            <img src={react_icon} alt="Tech-Icons" />
          </IconContainer>
          <h3>React.js</h3>
          <p>
            Ich habe React als Teil einen Bootcamps kennengelernt und habe
            deshalb die meiste Erfahrung mit dem Framework.
          </p>
        </SkillCard>
        <SkillCard>
          <IconContainer>
            <img src={nodejs_icon} alt="Tech-Icons" />
          </IconContainer>
          <h3>Node.js</h3>
          <p>Für Backendlösungen greife ich auf Express mit Node.js zurück.</p>
          <p>Generell in Verbindung mit MongoDB.</p>
        </SkillCard>
      </SkillList>
    </SkillsSection>
  )
}
const SkillsSection = styled.section`
  background-color: #00405e;
  margin-top: -6em;
  z-index: -20;
`
const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
const SkillCard = styled.li`
  min-height: 450px;
  max-width: 300px;
  padding: 2em;
  background: white;
  border-radius: 25px;
  color: #3b3b3b;
  justify-content: center;
`
const IconContainer = styled.div`
  position: relative;
  width: 80px;
  left: 50%;
  margin-left: -40px;
  @media (min-width: 1000px) {
    margin-left: -60px;
    width: 120px;
  }
`
const IconContainerOne = styled.div`
  position: relative;
  padding-top: 20px;
  width: 180px;
  left: 50%;
  margin-left: -90px;
  @media (min-width: 1000px) {
    margin-left: -120px;
    width: 240px;
  }
`
