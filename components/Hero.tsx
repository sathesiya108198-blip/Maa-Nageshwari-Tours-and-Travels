import BusSearch from "./BusSearch";

const benefits = [
  "Safe Journey",
  "Comfortable Seats",
  "On-Time Departure",
  "Distance-Based Fares",
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow light">Trusted modern transport</p>
          <h1>
            Safe • Comfortable • On Time
            <span className="hero-subhead">Travel Beyond</span>
          </h1>
          <p className="hero-text">With Maa Nageshwari, experience well-planned intercity travel, dependable departures, and comfort-first journeys across Gujarat and India.</p>

          <div className="hero-pill-row" aria-label="Travel benefits">
            {benefits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual-card">
          <div className="visual-image" aria-label="Travel bus" />
        </div>
      </div>
      <div className="search-surface container">
        <BusSearch />
      </div>
    </section>
  );
}
