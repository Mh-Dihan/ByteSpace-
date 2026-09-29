const courses = [
  { cls: 'c1', title: 'Learn Figma from Basic', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80' },
  { cls: 'c2', title: 'Build Digital Asset', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80' },
  { cls: 'c3', title: 'The Power of Big Data', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80' },
  { cls: 'c4', title: 'Balancing Productivity and Rest', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80' },
  { cls: 'c5', title: 'Mastering Money Management', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80' },
  { cls: 'c6', title: 'From Idea to Startup Success', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80' },
]

export default function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="container">
        <span className="tag">Popular Courses</span>
        <div className="head-row">
          <div>
            <h2 className="title">Learn In-Demand Skills</h2>
            <p style={{ fontSize: 12, color: 'var(--muted)' }}>Explore our most popular courses and start your journey today.</p>
          </div>
          <a href="#courses">View All Courses →</a>
        </div>
        <div className="grid3">
          {courses.map(c => (
            <div className="card course" key={c.title}>
              <div className={`img ${c.cls}`}>
                <img src={c.image} alt="" className="course-cover" />
                <div className="meta-row">
                  <span>17 Lessons</span><span>2 hours 16 mins</span><span>59 Comments</span>
                </div>
              </div>
              <div className="body">
                <div className="course-head">
                  <div>
                    <h4>{c.title}</h4>
                    <small className="by">by <a href="#courses">purepearl studio</a></small>
                  </div>
                  <div className="rating">4.5 ★</div>
                </div>
                <div className="course-foot">
                  <span className="level">📶 Beginner</span>
                  <span className="avatars"><i></i><i></i><i></i><i></i><b>26+</b></span>
                </div>
                <div className="price"><b>$25</b><small>/lifetime</small></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
