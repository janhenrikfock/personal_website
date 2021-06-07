import styled from 'styled-components/macro'
import jhflogo from '../images/janhenrikfock.svg'
import xing from '../images/xing.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

export default function Header({ projectRef, techStackRef, learningRef }) {
  function scrollTo(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo src={jhflogo} alt="logo of the websites owner" />
        <Navigation>
          <NavItem onClick={() => scrollTo(projectRef)} href="#">
            My Work
          </NavItem>
          <NavItem onClick={() => scrollTo(techStackRef)} href="#">
            My Techstack
          </NavItem>
          <NavItem onClick={() => scrollTo(learningRef)} href="#">
            My Learning
          </NavItem>
        </Navigation>
      </NavContainer>
      <SocialHeader>
        <SocialNav>
          <li>
            <a href="https://github.com/janhenrikfock">
              <img src={github} alt="github logo" />
            </a>
          </li>
          <li>
            <a href="https://www.xing.com/profile/JanHenrik_Fock2/cv">
              <img src={xing} alt="xing logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/janhenrikfock/">
              <img src={linkedin} alt="linkedin logo" />
            </a>
          </li>
        </SocialNav>
      </SocialHeader>
    </HeaderContainer>
  )
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
const Navigation = styled.ul`
  float: right;
  display: flex;
`
const NavItem = styled.li`
  cursor: pointer;
  color: white;
  padding: 0 1em;
`
const SocialHeader = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: grid;
    justify-items: center;
    align-items: center;
  }
`
const SocialNav = styled.ul`
  display: flex;
  gap: 4em;
`
