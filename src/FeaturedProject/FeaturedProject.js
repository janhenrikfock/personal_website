import styled from 'styled-components/macro'
import ProjectScreenshot from '../images/screenshot.svg'
import github from '../images/github.svg'
import webicon from '../images/web-icon.svg'

export default function FeaturedProject() {
  return (
    <FeaturedSection>
      <FlexLeft>
        <Bubble></Bubble>
        <Subtitle>Featured Project</Subtitle>
        <StyledH2>Gesellenstück: Monsters of DnD</StyledH2>

        <DescriptionParagraph>
          Mein Gesellenstück des Bootcamps war ein Monsterkatalog für mein
          Lieblingshobby "Dungeons and Dragons". Ich konnte hierfür auf eine API
          zurückgreifen die die Informationen zur Verfügung stellt. Das Projekt
          ist realisiert mit React.js. Alle Komponenten sind mit Unit-Tests
          versehen und mit Storybook wurde auch ein interaktiver Styleguide
          implementiert.
        </DescriptionParagraph>
        <LinkList>
          <ListItem>
            <Link href="https://github.com/janhenrikfock/monsters-of-dnd">
              <Icon src={github} alt="github logo" /> Check the Repo
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://capstone-project-six.vercel.app/">
              <Icon src={webicon} alt="github logo" /> Check the Project
            </Link>
          </ListItem>
        </LinkList>
      </FlexLeft>
      <Screenshot src={ProjectScreenshot} alt="Screenshot featured project" />
    </FeaturedSection>
  )
}
const FeaturedSection = styled.section`
  position: relative;

  @media (min-width: 950px) {
    display: flex;
  }
`
const FlexLeft = styled.div`
  @media (min-width: 800px) {
    padding-left: 5em;
  }
`
const Bubble = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #f5034e;
  z-index: -1;
`
const Subtitle = styled.p`
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  color: #00a5a8;
  letter-spacing: 0.2em;
  font-size: 1.15em;
`
const StyledH2 = styled.h2`
  text-align: left;
  color: black;
  font-weight: bold;
  font-size: 1.4em;
`
const DescriptionParagraph = styled.p`
  color: #3b3b3b;
  margin: 4em 0;

  font-size: 1em;
  line-height: 1.8em;
  font-weight: 500;
  text-align: left;
  @media (min-width: 500px) {
    padding-right: 4em;
  }
`
const LinkList = styled.ul`
  list-style: none;
  text-align: left;
  padding-bottom: 4em;
`
const ListItem = styled.li``
const Link = styled.a`
  color: #3b3b3b;
  text-decoration: none;
`
const Icon = styled.img`
  padding-top: 0.45em;
  width: 25px;
  height: 25px;
`
const Screenshot = styled.img`
  max-height: 550px;
  min-height: 270px;
`
