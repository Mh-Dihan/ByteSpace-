export default function Partners() {
  const brands = ['Google', '▦ Microsoft', '◉ Spotify', 'N Notion', '⌘ Figma', 'A Adobe']
  return (
    <section className="partners">
      <div className="container">
        <small>Trusted by 10,000+ learners and top companies</small>
        <div className="row">
          {brands.map(b => <span key={b}>{b}</span>)}
        </div>
      </div>
    </section>
  )
}
