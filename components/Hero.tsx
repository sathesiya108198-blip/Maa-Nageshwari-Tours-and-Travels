import BusSearch from "./BusSearch";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow light">Trusted modern transport</p>
          <h1>Safe • Comfortable • On Time</h1>
          <p className="hero-text">Book reliable intercity and regional travel with Maa Nageshwari Tours &amp; Travels.</p>
          <div className="hero-pill-row">
            <span>24/7 support</span>
            <span>Verified operators</span>
            <span>Transparent fares</span>
          </div>
        </div>

        <div className="hero-visual-card">
          <div className="visual-image" />
        </div>
      </div>
      <div className="search-surface container">
        <BusSearch />
      </div>
    </section>
  );
}
