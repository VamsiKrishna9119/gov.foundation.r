import { useState, useEffect } from 'react'
import { products, CATEGORIES, CATEGORY_STYLES } from '../data/products'

function SkeletonCard() {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="skeleton-card">
        <div className="skeleton skeleton-img" />
        <div className="skeleton-body">
          <div className="skeleton skeleton-tag" />
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text short" />
        </div>
      </div>
    </div>
  )
}

export default function ProductSection() {
  const [loading, setLoading]             = useState(true)
  const [items, setItems]                 = useState([])
  const [search, setSearch]               = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    // Simulate async fetch
    const t = setTimeout(() => {
      setItems(products)
      setLoading(false)
    }, 1600)
    return () => clearTimeout(t)
  }, [])

  const filtered = items.filter(p => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat  = activeCategory === 'All' || p.category === activeCategory
    return matchName && matchCat
  })

  return (
    <section className="products-section" id="products">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
          <div>
            <span className="section-tag">Latest at eGov</span>
            <h2 className="section-heading mt-1">Explore our latest work</h2>
          </div>
          <a href="#" className="btn-outline-custom d-none d-md-inline-block">View All</a>
        </div>

        {/* Search + Filter bar */}
        <div className="search-filter-bar">
          <div className="row g-3 align-items-center">
            <div className="col-md-5">
              <div className="search-wrapper">
                <i className="bi bi-search search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search products..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        {loading ? (
          <div className="row g-4">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="no-results">
            <i className="bi bi-search" />
            <h5>No results found</h5>
            <p>
              We couldn't find any products matching{' '}
              <strong>"{search}"</strong>
              {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}.
              <br />Try a different search term or category.
            </p>
            <button
              className="btn-primary-custom mt-2"
              onClick={() => { setSearch(''); setActiveCategory('All') }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map(p => {
              const style = CATEGORY_STYLES[p.category] || { bg: '#f3f4f6', color: '#374151' }
              return (
                <div className="col-sm-6 col-lg-3" key={p.id}>
                  <div className="product-card">
                    <img src={p.image} alt={p.name} />
                    <div className="card-body">
                      <span className="product-tag" style={{ background: style.bg, color: style.color }}>
                        {p.category}
                      </span>
                      <h6>{p.name}</h6>
                      <p className="desc">{p.description}</p>
                      <div className="product-meta">
                        <span className="price-tag">{p.price}</span>
                        <a href="#" className="read-more">Read More →</a>
                      </div>
                      <div className="mt-2">
                        <small style={{ color: '#9ca3af', fontSize: '.77rem' }}>
                          <i className="bi bi-calendar3 me-1" />{p.date}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="text-center mt-4 d-md-none">
          <a href="#" className="btn-outline-custom">View All Products</a>
        </div>
      </div>
    </section>
  )
}
