import { useState } from 'react'
import SocialNavComponent from './SocialNav/SocialNav'
import styled from 'styled-components/macro'
import jhflogo from '../images/janhenrikfock.svg'
import xing from '../images/xing.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import menuicon from '../images/Icon_burgermenu.svg'

export default function Header({ projectRef, techStackRef, learningRef }) {
  const [showMenu, setShowMenu] = useState(false)

  function scrollTo(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    })
    setShowMenu(false)
  }

  function toggleMenu(state) {
    if (state === false) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo src={jhflogo} alt="logo of the websites owner" />
        <Menubutton onClick={() => toggleMenu(showMenu)}>
          <img src={menuicon} alt="click to show navigation" />
        </Menubutton>
        <Navigation menuState={showMenu}>
          <NavItem onClick={() => scrollTo(projectRef)} href="#">
            My Work
          </NavItem>
          <NavItem onClick={() => scrollTo(techStackRef)} href="#">
            My Techstack
          </NavItem>
          <NavItem onClick={() => scrollTo(learningRef)} href="#">
            My Learning
          </NavItem>
          <MobileNavItem>
            <MobileSocialLinks>
              <a href="https://github.com/janhenrikfock">
                <img src={github} alt="github logo" />
              </a>
              <a href="https://www.xing.com/profile/JanHenrik_Fock2/cv">
                <img src={xing} alt="xing logo" />
              </a>
              <a href="https://www.linkedin.com/in/janhenrikfock/">
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </MobileSocialLinks>
          </MobileNavItem>
        </Navigation>
      </NavContainer>
      <SocialHeader>
        <SocialNavComponent />
      </SocialHeader>
    </HeaderContainer>
  )
}

const displayMenu = {
  false: 'none',
  true: 'flex',
}

const HeaderContainer = styled.div`
  background-color: #023046;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 66% auto;
    background: unset;
  }
`
const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  @media (min-width: 800px) {
    background-color: #023046;
    padding: 1.5em 10em;
  }
`
const Logo = styled.img`
  width: 20%;
  min-width: 110px;
  max-width: 160px;
`
const Menubutton = styled.label`
  width: 60px;
  height: 50px;
  @media (min-width: 800px) {
    display: none;
  }
`
const Navigation = styled.ul`
  display: ${({ menuState }) => displayMenu[menuState]};
  flex-direction: column;
  border-radius: 5px;
  position: absolute;
  top: 120px;
  right: 5%;
  z-index: 10;
  width: 50%;
  text-align: right;
  background: white;
  @media (min-width: 800px) {
    flex-direction: row;
    float: right;
    display: flex;
    position: unset;
    width: unset;
    background: none;
    text-align: left;
  }
`

const NavItem = styled.li`
  color: #023046;
  padding: 1.2rem 1rem;
  cursor: pointer;
  border-bottom: solid 2px #023046;
  @media (min-width: 800px) {
    border: none;
    padding: 0 1em;
    color: white;
  }
`
const MobileNavItem = styled.li`
  color: #023046;
  padding: 1.2rem 1rem;
  border-bottom: solid 2px #023046;
  @media (min-width: 800px) {
    display: none;
  }
`
const MobileSocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const SocialHeader = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: grid;
    justify-items: center;
    align-items: center;
  }
`
