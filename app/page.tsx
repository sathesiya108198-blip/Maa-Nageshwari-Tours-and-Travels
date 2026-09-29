import Link from "next/link";
import Hero from "../components/Hero";
import DailyServiceCard from "../components/DailyServiceCard";
import { services } from "../data/services";

const trustPoints = [
  { title: "Safe & Secure", text: "Verified operators, secure travel guidance, and dependable support." },
  { title: "Best Price Guarantee", text: "Transparent fares with quality-first service and route planning." },
  { title: "24/7 Customer Support", text: "Travel assistance and real-time support before and during the journey." },
];

const destinations = [
  "Ahmedabad",
  "Rajkot",
  "Surat",
  "Mumbai",
  "Vadodara",
  "Delhi",
  "Jamnagar",
  "Bhavnagar",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-wrap">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Travel quality you can rely on</h2>
          </div>
        </div>
        <div className="feature-grid">
          {trustPoints.map((item) => (
            <div key={item.title} className="feature-card">
              <div className="mini-visual" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Popular destinations</p>
            <h2>Top Destinations</h2>
            <p className="section-subtitle">Explore amazing places across Gujarat and India.</p>
          </div>
        </div>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <Link
              key={destination}
              href={`/booking?from=Ahmedabad&to=${encodeURIComponent(destination)}`}
              className="destination-card"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(7,26,51,0.4), rgba(42,157,244,0.18)), url(${index % 2 === 0 ? "/images/bus-hero.png" : "/images/bus-1.jpg"})`,
              }}
            >
              <span>{destination}</span>
              <small>{index % 2 === 0 ? "Gujarat" : "India"}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Daily services</p>
            <h2>Popular daily departures</h2>
          </div>
        </div>
        <div className="card-grid three">
          {services.slice(0, 3).map((service) => (
            <DailyServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
