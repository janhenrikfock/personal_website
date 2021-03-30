import './FeaturedProject.css'
import ProjectScreenshot from '../images/screenshot.png'

export default function FeaturedProject() {
  return (
    <section className="featured">
      <div className="bubble"></div>
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle">Featured Project</p>
          <h2>Gesellenstück: Monsters of DnD</h2>
          <p className="featured-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      <img
        className="right transition2"
        src={ProjectScreenshot}
        alt="Screenshot featured project"
      />
    </section>
  )
}
