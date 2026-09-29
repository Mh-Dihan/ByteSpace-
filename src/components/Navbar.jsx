import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <Link to="/" className="logo"><img src={logo} alt="" />ByteSpace</Link>
      <ul className={open ? 'open' : ''}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#courses" onClick={() => setOpen(false)}>Courses</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#testimonials" onClick={() => setOpen(false)}>Blog</a></li>
        <li><a href="#footer" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
      <div className="nav-r">
        <span>🔍</span>
        <Link to="/login" className="btn btn-outline">Login</Link>
        <Link to="/register" className="btn btn-lime">Sign Up</Link>
        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  )
}
