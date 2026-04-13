const supporters = [
  { name: 'World Bank',      img: 'https://placehold.co/130x60/f5f5f5/888888?text=World+Bank' },
  { name: 'Gates Foundation',img: 'https://placehold.co/130x60/f5f5f5/888888?text=BMGF' },
  { name: 'MoHUA',           img: 'https://placehold.co/130x60/f5f5f5/888888?text=MoHUA' },
  { name: 'UNDP',            img: 'https://placehold.co/130x60/f5f5f5/888888?text=UNDP' },
  { name: 'Omidyar Network', img: 'https://placehold.co/130x60/f5f5f5/888888?text=Omidyar' },
  { name: 'USAID',           img: 'https://placehold.co/130x60/f5f5f5/888888?text=USAID' },
]

export default function Supporters() {
  return (
    <section className="supporters-section" id="resources">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">Our Supporters</h2>
          <p className="section-sub mt-2">
            Trusted by governments, foundations and organisations across India and globally
          </p>
        </div>
        <div className="row align-items-center justify-content-center g-4">
          {supporters.map(s => (
            <div className="col-4 col-md-2 text-center" key={s.name}>
              <img src={s.img} alt={s.name} className="img-fluid supporter-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
