const featureCards = [
  { img: 'https://placehold.co/300x155/e3f2fd/1565C0?text=Smart+Cities', title: 'Smart City Solutions', desc: 'Integrated urban management platforms for modern city administrations.' },
  { img: 'https://placehold.co/300x155/fce4ec/c62828?text=Healthcare',   title: 'Health Services',       desc: 'Digital health platforms connecting citizens to quality care services.' },
  { img: 'https://placehold.co/300x155/e8f5e9/2e7d32?text=Water+Mgmt',  title: 'Water Management',     desc: 'Smart water management and automated billing systems.' },
  { img: 'https://placehold.co/300x155/fff8e1/e65100?text=Finance',      title: 'Municipal Finance',    desc: 'Transparent financial management for local bodies.' },
]

const approaches = [
  { bg: '#e3f2fd', iconColor: '#1565C0', icon: 'bi-buildings',    title: 'Urban Governance', desc: 'Streamlined workflows for city administrations and municipal bodies.' },
  { bg: '#fce4ec', iconColor: '#c62828', icon: 'bi-heart-pulse',  title: 'Public Health',    desc: 'Digital tools for community health management and disease tracking.' },
  { bg: '#e8f5e9', iconColor: '#2e7d32', icon: 'bi-tree',         title: 'Environment',      desc: 'Monitoring tools for sustainable environment and resource management.' },
]

export default function Features() {
  return (
    <section className="features-section" id="initiatives">
      <div className="container">
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-5">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-heading">
              Our products need <span className="accent-blue">bold approaches</span>
            </h2>
            <p className="section-sub mt-3">
              We leverage cutting-edge open-source technology to solve complex governance challenges,
              making public services more accessible, transparent, and efficient at scale.
            </p>
            <a href="#" className="btn-primary-custom mt-4 d-inline-block">Discover More</a>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              {featureCards.map(c => (
                <div className="col-6" key={c.title}>
                  <div className="feature-card">
                    <img src={c.img} alt={c.title} />
                    <h6>{c.title}</h6>
                    <p className="text-muted" style={{ fontSize: '.85rem', marginBottom: 0 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4">
          {approaches.map(a => (
            <div className="col-md-4" key={a.title}>
              <div className="approach-card">
                <div className="icon-box" style={{ background: a.bg }}>
                  <i className={`bi ${a.icon}`} style={{ color: a.iconColor }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ fontSize: '.97rem' }}>{a.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '.85rem' }}>{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
