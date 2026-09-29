import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import AuthVisual from '../components/AuthVisual'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)

  const validate = () => {
    const e = {}
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (form.password.length < 6) e.password = 'Use at least 6 characters.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = (ev) => {
    ev.preventDefault()
    if (validate()) alert('Login successful!')
  }

  return (
    <main className="auth">
      <div className="container">
        <Link to="/" className="logo"><img src={logo} alt="" />ByteSpace</Link>
        <div className="auth-layout">
          <AuthVisual
            title="Sign in with ease"
            description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
          <div className="auth-card">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
          <form noValidate onSubmit={submit}>
            <div>
              <label htmlFor="e">Email Address</label>
              <input id="e" type="email" placeholder="Enter your email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} />
              {errors.email && <div className="err">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="p">Password</label>
              <div className="pw">
                <input id="p" type={showPw ? 'text' : 'password'} placeholder="Enter your password" value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })} />
                <button type="button" aria-label="Show password" onClick={() => setShowPw(!showPw)}>👁</button>
              </div>
              {errors.password && <div className="err">{errors.password}</div>}
            </div>
            <div className="forgot"><a href="#">Forgot password?</a></div>
            <button className="btn btn-lime">Login</button>
          </form>
          <div className="alt">Don't have an account? <Link to="/register">Sign Up</Link></div>
          </div>
        </div>
      </div>
    </main>
  )
}
