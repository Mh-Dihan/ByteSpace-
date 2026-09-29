import logo from '../assets/logo.svg'

export default function Footer() {
  const submit = (e) => {
    e.preventDefault()
    alert('Thanks for subscribing!')
  }
  return (
    <footer id="footer">
      <div className="container">
        <div className="f-grid">
          <div>
            <a href="#home" className="logo" style={{ color: 'var(--blue)' }}>
              <img src={logo} alt="" style={{ filter: 'hue-rotate(200deg) saturate(3)' }} />ByteSpace
            </a>
            <small>Learn · Build · Grow</small>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">Blog</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <div className="socials"><span></span><span></span><span></span><span></span></div>
          </div>
          <div>
            <h5>Subscribe to our Newsletter</h5>
            <small>Get the latest updates and offers.</small>
            <form className="news" onSubmit={submit}>
              <input type="email" placeholder="Enter your email" required aria-label="Email" />
              <button className="btn btn-blue">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="f-bottom">
          <small>© 2026 ByteSpace. All rights reserved.</small>
          <div><small>Privacy Policy</small><small>Terms of Service</small></div>
        </div>
      </div>
    </footer>
  )
}
