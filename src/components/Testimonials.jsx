const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    text: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
    bg: 'linear-gradient(135deg,#f5c94a,#e8935a)'
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    bg: 'linear-gradient(135deg,#3a3f4b,#6b7280)'
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    bg: 'linear-gradient(135deg,#cfd6e4,#9aa4b8)'
  },
]

export default function Testimonials() {
  return (
    <section className="testi" id="testimonials">
      <div className="container">
        <span className="tag">Testimonials</span>
        <h2 className="title">What Our Learners Say</h2>
        <div className="grid3 testi-photo-grid">
          {testimonials.map(t => (
            <div className="testi-item" key={t.name}>
              <div className="avatar-photo" style={{ background: t.bg }}>
                {t.name.split(' ').map(w => w[0]).join('')}
              </div>
              <b>{t.name}</b>
              <div className="role">{t.role}</div>
              <p>"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
