import './Header.css'
import jhflogo from '../images/janhenrikfock.png'
import xing from '../images/xing.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={jhflogo} alt="logo of the websites owner" />
      <nav>
        <ul>
          <li href="#">About me</li>
          <li href="#">My work</li>
          <li href="#">Contact</li>
        </ul>
      </nav>
      <div className="social-header">
        <ul>
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
    </header>
  )
}
