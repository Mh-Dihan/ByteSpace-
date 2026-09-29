import manPhoto from '../assets/man-cutout.png'
import womanPhoto from '../assets/woman-cutout.png'

export default function Growth() {
  return (
    <section className="growth">
      <div className="container">

        {/* Top block: stats + man photo with course card */}
        <div className="growth-block growth-top">
          <div className="growth-copy">
            <h2 className="title">Your Path to Professional Growth Starts Here!</h2>
            <p>
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills, gain industry expertise, or embark on a new career path entirely, we
              have the courses you need.
            </p>
            <div className="growth-stats">
              <div><strong>12K</strong><small>Students</small></div>
              <div><strong>70+</strong><small>Courses</small></div>
              <div><strong>16</strong><small>Creators</small></div>
            </div>
          </div>

          <div className="growth-art">
            <img src={manPhoto} alt="ByteSpace learner wearing headphones with a laptop" className="growth-photo" />
            <div className="float-card course-float">
              <div className="cf-thumb">17 Lessons · 2h 16m</div>
              <h5>Learn Figma from Basic</h5>
              <small>by purepearl studio</small>
              <div className="cf-price">$25<span>/lifetime</span></div>
            </div>
            <div className="float-card progress-float">
              <small>Learning Progress</small>
              <strong>55%</strong>
              <div className="bar"><span style={{ width: '55%' }}></span></div>
            </div>
          </div>
        </div>

        {/* Bottom block: woman photo with stat cards + checklist */}
        <div className="growth-block growth-bottom">
          <div className="growth-art">
            <img src={womanPhoto} alt="ByteSpace course creator wearing headphones with a tablet" className="growth-photo" />
            <div className="float-card name-float">Mohammad Amzad</div>
            <div className="float-card revenue-float">
              <small>Total Revenue</small>
              <strong>$120.29</strong>
              <div className="bar"><span style={{ width: '70%' }}></span></div>
            </div>
            <div className="float-card ytd-float">
              <small>Year to Date</small>
              <strong>$1,200.38</strong>
            </div>
            <div className="float-card students-float">
              <small>Happy Students</small>
              <strong>3K+</strong>
            </div>
          </div>

          <div className="growth-copy">
            <h2 className="title">Create &amp; Manage Courses Easily.</h2>
            <p><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="check-list">
              <li>Share Your Expertise</li>
              <li>Monetize Your Passion</li>
              <li>Flexibility and Autonomy</li>
              <li>Build a Community</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
