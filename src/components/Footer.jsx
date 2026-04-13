const links = {
  Products: ["mSeva", "DIGIT", "eSamudaay", "mGram Seva", "Health DIGIT"],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Press"],
  Resources: ["Documentation", "Case Studies", "Reports", "API Docs"],
};

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4 col-md-12">
            <a
              href="#"
              className="navbar-brand text-decoration-none d-inline-block mb-3"
              style={{ fontSize: "1.5rem", fontWeight: 800 }}
            >
              <span className="brand-e">e</span>
              <span className="brand-gov">Gov</span>
            </a>
            <p
              style={{
                color: "rgba(255,255,255,.7)",
                lineHeight: 1.75,
                fontSize: ".9rem",
                maxWidth: 320,
              }}
            >
              eGov Foundation builds open-source technology to enable
              governments to deliver public services digitally, transforming
              lives across India.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[
                ["bi-twitter-x", "#"],
                ["bi-linkedin", "#"],
                ["bi-github", "#"],
                ["bi-youtube", "#"],
              ].map(([icon, href]) => (
                <a key={icon} href={href} className="social-icon">
                  <i className={`bi ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div className="col-lg-2 col-sm-6" key={title}>
              <h5 className="foot-title">{title}</h5>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-lg-2 col-sm-6">
            <h5 className="foot-title">Contact</h5>
            <ul>
              <li>
                <a href="mailto:info@egov.org.in">
                  <i className="bi bi-envelope me-2" />
                  info@egov.org.in
                </a>
              </li>
              <li>
                <a href="tel:+918043703355">
                  <i className="bi bi-telephone me-2" />
                  +91 80 4370 3355
                </a>
              </li>
              <li>
                <span
                  style={{ color: "rgba(255,255,255,.65)", fontSize: ".9rem" }}
                >
                  <i className="bi bi-geo-alt me-2" />
                  Bengaluru, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2"
          style={{ color: "rgba(255,255,255,.5)", fontSize: ".82rem" }}
        >
          <p className="mb-0">© 2026 eGov Foundation. All rights reserved.</p>
          <div className="d-flex gap-3">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(255,255,255,.5)",
                  fontSize: ".82rem",
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
