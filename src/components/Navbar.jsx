import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <span className="brand-e">e</span><span className="brand-gov">Gov</span>
        </a>

        <button
          className="navbar-toggler border-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {['About', 'Products', 'Initiatives', 'Platforms', 'Resources', 'Contact'].map(item => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="nav-link btn-nav" href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
