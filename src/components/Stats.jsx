const stats = [
  { num: '11',     label: 'States Covered' },
  { num: '5+ Bn',  label: 'Service Transactions' },
  { num: '3 Bn',   label: 'Citizens Impacted' },
  { num: '250+',   label: 'Urban Local Bodies' },
]

export default function Stats() {
  return (
    <section className="stats-section" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <div className="stat-big-num">1,000,000,100+</div>
          <p className="section-sub mt-2">
            Transactions processed across India through eGov platforms
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {stats.map(s => (
            <div className="col-6 col-md-3" key={s.label}>
              <div className="stat-card">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
