import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import AuthVisual from '../components/AuthVisual'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (form.password.length < 6) e.password = 'Use at least 6 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (validate()) alert('Registration successful!')
  }

  return (
    <main className="auth">
      <div className="container">
        <Link to="/" className="logo"><img src={logo} alt="" />ByteSpace</Link>
        <div className="auth-layout">
          <AuthVisual
            title="Sign up and come in"
            description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
          />
          <div className="auth-card">
          <h1>Create Your Account</h1>
          <p>Join ByteSpace and start your learning journey.</p>
          <form noValidate onSubmit={submit}>
            <div>
              <label htmlFor="n">Full Name</label>
              <input id="n" placeholder="Enter your full name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} />
              {errors.name && <div className="err">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="e">Email Address</label>
              <input id="e" type="email" placeholder="Enter your email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} />
              {errors.email && <div className="err">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="p">Password</label>
              <div className="pw">
                <input id="p" type={showPw ? 'text' : 'password'} placeholder="Create a password" value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })} />
                <button type="button" aria-label="Show password" onClick={() => setShowPw(!showPw)}>👁</button>
              </div>
              {errors.password && <div className="err">{errors.password}</div>}
            </div>
            <button className="btn btn-lime">Sign Up</button>
          </form>
          <div className="alt">Already have an account? <Link to="/login">Login</Link></div>
          </div>
        </div>
      </div>
    </main>
  )
}
