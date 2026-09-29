const features = [
  { ic: '👤', title: 'Expert Instructors', text: 'Learn from industry experts with real-world experience.' },
  { ic: '◈', title: 'Hands-on Projects', text: 'Build real projects to strengthen your portfolio.' },
  { ic: '◷', title: 'Flexible Learning', text: 'Study at your own pace, anytime, anywhere.' },
  { ic: '💼', title: 'Career Support', text: 'Get guidance and support to land your dream job.' },
]

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <span className="tag">Our Features</span>
        <h2 className="title">Everything You Need to Succeed</h2>
        <div className="grid4">
          {features.map(f => (
            <div className="card" key={f.title}>
              <div className="ic">{f.ic}</div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
