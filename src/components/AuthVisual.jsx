export default function AuthVisual({ title, description }) {
  return (
    <div className="auth-visual">
      <div className="auth-visual-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <span className="auth-loop"></span>
      <div className="auth-back-card">
        <span className="auth-mini-photo"></span>
        <strong>Build Digital Assets</strong>
        <small>17 Lessons</small>
      </div>
      <div className="auth-course-card">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" alt="" />
        <div className="auth-course-meta"><span>17 Lessons</span><span>2 hours 16 mins</span></div>
        <div className="auth-course-body">
          <div><strong>The Power of Big Data</strong><small>by ByteSpace Studio</small></div>
          <b>4.5 ★</b>
        </div>
        <div className="auth-course-bottom"><span>▮▂▆ Beginner</span><em>26+</em></div>
        <div className="auth-price">$25 <small>/lifetime</small></div>
      </div>
      <div className="auth-students"><strong>Happy Students</strong><span>4.5 (240) ★</span><div><i></i><i></i><i></i><i></i><b>2K+</b></div></div>
    </div>
  )
}
