export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="hero-badge">20 Years of Digital Governance</span>
            <h1>
              in public service delivery —{' '}
              <span className="accent">it's possible.</span>
            </h1>
            <p className="mt-3 mb-4" style={{ maxWidth: 520 }}>
              eGov Foundation transforms governance through open-source technology, making digital
              public services accessible, transparent, and efficient for every citizen across India.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#products" className="btn-hero-primary">Explore Our Work</a>
              <a href="#digit" className="btn-hero-outline">View Platform</a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://placehold.co/600x420/0b5ea8/ffffff?text=Digital+Transformation"
              alt="Digital Transformation in India"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
