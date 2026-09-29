import { Link } from 'react-router-dom'
import manPhoto from '../assets/man-cutout.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <h1>Build Your Future with <span>ByteSpace</span></h1>
        <p>Learn, build and grow with expert-led courses, hands-on projects and a supportive community.</p>
        <div className="btns">
          <Link to="/register" className="btn btn-lime">Get Started</Link>
          <a href="#courses" className="btn btn-outline">Explore Courses</a>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-photo-wrap">
          <img src={manPhoto} alt="ByteSpace learner wearing headphones and holding a laptop" />
        </div>
      </div>
    </section>
  )
}
