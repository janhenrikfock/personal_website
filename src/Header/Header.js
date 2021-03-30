import './Header.css'
import jhflogo from '../images/janhenrikfock.svg'
import xing from '../images/xing.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

export default function Header() {
  return (
    <div className="nav-container">
      <header className="header">
        <img src={jhflogo} class="logo" alt="logo of the websites owner" />
        <nav>
          <ul className="navigation">
            <li href="#">My Work</li>
            <li href="#">Just me</li>
            <li href="#">Contact</li>
          </ul>
        </nav>
      </header>
      <div className="social-header">
        <ul className="social-nav">
          <li>
            <a href="https://github.com/">
              <img src={github} alt="github logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={xing} alt="xing logo" />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={linkedin} alt="linkedin logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
