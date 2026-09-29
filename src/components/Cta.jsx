import { Link } from 'react-router-dom'

export default function Cta() {
  return (
    <section className="cta">
      <span className="deco" style={{ width: 70, height: 50, top: -10, left: 30, background: 'var(--lime)' }}></span>
      <div className="container">
        <span className="pill">Ready to Get Started?</span>
        <h2>Unleash Your Potential with ByteSpace</h2>
        <p>Join thousands of learners and start building your dream career today.</p>
        <Link to="/register" className="btn btn-lime">Get Started</Link>
      </div>
    </section>
  )
}
