import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section-wrap">
        <div className="glass-box narrow">
          <p className="eyebrow">About us</p>
          <h1>Professional bus travel with a local touch.</h1>
          <p>
            Maa Nageshwari Tours &amp; Travels supports dependable regional and intercity travel with a focus on comfort, punctuality,
            and trusted service.
          </p>
          <div className="info-grid two">
            <div className="info-card">
              <h3>Our mission</h3>
              <p>To make bus travel simpler, more transparent, and more customer-friendly across Gujarat and major national routes.</p>
            </div>
            <div className="info-card">
              <h3>What we do</h3>
              <p>Coordinate journeys with multiple operators, maintain service reliability, and help travelers compare routes and fares.</p>
            </div>
          </div>
          <div className="pill-row">
            <span className="chip">Safe travel</span>
            <span className="chip">Trusted operators</span>
            <span className="chip">Responsive support</span>
          </div>
          <Link href="/booking" className="primary-button">Plan your journey</Link>
        </div>
      </section>
    </main>
  );
}
