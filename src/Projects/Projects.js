import React from 'react'
import styled from 'styled-components/macro'
import github from '../images/github.svg'
import webicon from '../images/web-icon.svg'

export default function Project({ project }, ref) {
  return (
    <ProjectSection>
      <FlexLeft>
        <Bubble></Bubble>
        <Subtitle>Project</Subtitle>
        <StyledH2>{project.title}</StyledH2>

        <DescriptionParagraph>{project.description}</DescriptionParagraph>
        <LinkList>
          <ListItem>
            <Link href={project.github}>
              <Icon src={github} alt="github logo" /> Check the Repo
            </Link>
          </ListItem>
          <ListItem>
            <Link href={project.deployment}>
              <Icon src={webicon} alt="web-logo" /> Check the Project
            </Link>
          </ListItem>
        </LinkList>
      </FlexLeft>
      <Screenshot src={project.screenshot} alt="Screenshot of the project" />
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
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
  color: black;
  letter-spacing: 0.2em;
  font-size: 1.15em;
`
const StyledH2 = styled.h2`
  text-align: left;
  color: #3b3b3b;
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
  filter: grayscale(100%);
  border-radius: 20px;
`
