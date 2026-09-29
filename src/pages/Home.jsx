import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Partners from '../components/Partners.jsx'
import About from '../components/About.jsx'
import Growth from '../components/Growth.jsx'
import Features from '../components/Features.jsx'
import Courses from '../components/Courses.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Cta from '../components/Cta.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <header className="hero-wrap">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </header>
      <Partners />
      <About />
      <Growth />
      <Features />
      <Courses />
      <Stats />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}
