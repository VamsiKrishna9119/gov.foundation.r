export default function SustainingChange() {
  return (
    <section className="change-section" id="about-impact">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <span className="section-tag">Our Impact</span>
            <h2 className="section-heading">
              20 years making a positive,{' '}
              <span className="accent-blue">sustaining change</span>
            </h2>
            <p className="section-sub mt-3">
              We've been at the forefront of India's digital governance revolution, partnering with
              state governments and urban local bodies to deliver technology that genuinely improves
              lives at the grassroots.
            </p>
            <div className="row g-3 mt-3">
              <div className="col-sm-6">
                <div className="mini-stat">
                  <div className="n">250+</div>
                  <div className="l">Products Deployed</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mini-stat">
                  <div className="n">2 Bn+</div>
                  <div className="l">Lives Impacted</div>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary-custom mt-4 d-inline-block">Read Our Story</a>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div style={{ position: 'relative' }}>
              <img
                src="https://placehold.co/560x400/e3f2fd/1565C0?text=Sustaining+Change"
                alt="Impact"
                className="img-fluid rounded-4 shadow-lg"
              />
              <div
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '16px 18px',
                  boxShadow: '0 4px 20px rgba(0,0,0,.12)',
                  maxWidth: 240,
                  position: 'absolute',
                  bottom: 20,
                  left: 16,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img
                    src="https://placehold.co/42x42/1565C0/ffffff?text=VK"
                    alt="Vikas Kumar"
                    style={{ borderRadius: '50%', width: 42, height: 42 }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '.88rem' }}>Vikas Kumar</div>
                    <div style={{ color: '#6b7280', fontSize: '.75rem' }}>Urban Planning Officer</div>
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: '#555', marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>
                  "eGov technology transformed how we deliver services to our citizens."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
