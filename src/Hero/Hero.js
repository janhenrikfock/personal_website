import styled, { keyframes } from 'styled-components/macro'
import herodesign from '../images/herodesign.svg'

export default function Hero() {
  return (
    <HeroSection>
      <div>
        <HeroHeadline>Frisch gebackener Junior Web-Developer</HeroHeadline>
        <HeroText>
          Quereinsteiger im Web-Development, frisch aus dem Bootcamp. Ich
          verwandele Ideen in Code.
        </HeroText>
        <CallToAction>Lerne mich kennen:</CallToAction>

        <ScrollAnim width="52" height="92" viewBox="0 0 52 92">
          <g
            id="Switch_CtA"
            data-name="Switch CtA"
            transform="translate(-166 -577)"
          >
            <g
              id="Rechteck_1"
              data-name="Rechteck 1"
              transform="translate(166 577)"
              fill="none"
              stroke="#fff"
              strokeWidth="6"
            >
              <rect width="52" height="92" rx="26" stroke="none" />
              <rect x="3" y="3" width="46" height="86" rx="23" fill="none" />
            </g>
            <g
              id="Ellipse_1"
              data-name="Ellipse 1"
              transform="translate(177 592)"
              fill="#fff"
              stroke="#707070"
              strokeWidth="1"
            >
              <AnimatedCircle cx="15" cy="15" r="15" stroke="none" />
              <AnimatedCircle cx="15" cy="15" r="14.5" fill="none" />
            </g>
          </g>
        </ScrollAnim>
      </div>
      <DesignContainer>
        <img src={herodesign} alt="design" />
      </DesignContainer>
    </HeroSection>
  )
}
const HeroSection = styled.section`
  background-color: #00405e;
  color: white;
  display: grid;
  text-align: left;
  padding: 5em 2em;

  @media (min-width: 800px) {
    padding: 5em 5em 5em 10em;
    height: 78vh;
    width: 66%;
  }
`
const HeroHeadline = styled.h1`
  color: #00a5a8;
  text-align: left;
  font-size: 1.7em;
  @media (min-width: 800px) {
    font-size: 2em;
    padding-top: 3em;
  }
`
const HeroText = styled.p`
  padding-top: 1.5em;
  text-align: left;
  font-size: 1.15em;
  @media (min-width: 800px) {
    padding-right: 5em;
  }
`
const CallToAction = styled.p`
  padding-top: 1.5em;
  color: #f5034e;
`
const DesignContainer = styled.div`
  display: none;
  @media (min-width: 800px) {
    position: absolute;
    display: unset;
    width: 350px;
    margin-left: 66%;
    margin-top: 12%;
    left: -175px;
  }
`
const ScrollAnim = styled.svg`
  width: 30px;
`
const animateSwitch = keyframes`
0%, 100%{
  transform: translateY(0px)
}
50%{
  transform: translateY(30px)
}
`
const AnimatedCircle = styled.circle`
  animation: ${animateSwitch} 1.5s infinite alternate-reverse;
`
