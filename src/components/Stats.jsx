const stats = [
  { ic: '☺', num: '10K+', label: 'Happy Learners' },
  { ic: '▶', num: '500+', label: 'Live Courses' },
  { ic: '👤', num: '100+', label: 'Expert Instructors' },
  { ic: '✓', num: '95%', label: 'Success Rate' },
]

export default function Stats() {
  return (
    <section className="stats">
      <span className="deco" style={{ width: 60, height: 40, top: -10, left: 20 }}></span>
      <span className="deco" style={{ width: 50, height: 50, bottom: -15, right: 30 }}></span>
      <div className="container">
        <h3>Our Impact in Numbers</h3>
        <div className="grid4">
          {stats.map(s => (
            <div key={s.label}>
              <div className="ic">{s.ic}</div>
              <strong>{s.num}</strong>
              <small>{s.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
