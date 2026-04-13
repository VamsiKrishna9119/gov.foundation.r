export default function DigitPlatform() {
  return (
    <section className="digit-section" id="platforms">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <span
              className="hero-badge d-inline-block"
              style={{ marginBottom: 14 }}
            >
              Our Platform
            </span>
            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
              <span className="digit-badge">DIGIT</span>
              <h2
                className="mb-0"
                style={{ fontSize: 'clamp(1.4rem,3vw,1.85rem)', fontWeight: 700, color: '#fff' }}
              >
                technology-for-good platform
              </h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,.82)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560 }}>
              DIGIT is an open-source, cloud-native platform that enables governments to deliver
              public services digitally at scale. Built on microservices architecture, it empowers
              civic tech across India and beyond.
            </p>
            <ul style={{ color: 'rgba(255,255,255,.75)', fontSize: '.9rem', lineHeight: 2, paddingLeft: '1.2rem', margin: '16px 0' }}>
              <li>Open-source &amp; vendor-neutral</li>
              <li>Deployed in 11+ states across India</li>
              <li>Handles billions of citizen transactions</li>
            </ul>
            <div className="d-flex flex-wrap gap-3 mt-2">
              <a
                href="#"
                style={{
                  background: '#FFD54F', color: '#0d1b6e',
                  border: 'none', borderRadius: 8, padding: '12px 28px',
                  fontWeight: 700, textDecoration: 'none', display: 'inline-block',
                  transition: 'background .25s',
                }}
              >
                Explore DIGIT
              </a>
              <a
                href="#"
                style={{
                  background: 'transparent', color: '#fff',
                  border: '2px solid rgba(255,255,255,.6)', borderRadius: 8,
                  padding: '12px 28px', fontWeight: 600,
                  textDecoration: 'none', display: 'inline-block',
                  transition: 'all .25s',
                }}
              >
                View Documentation
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <img
              src="https://placehold.co/420x390/283593/90CAF9?text=DIGIT+Platform"
              alt="DIGIT Platform"
              className="img-fluid rounded-4"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,.35)', maxHeight: 360, objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
