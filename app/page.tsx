import Link from "next/link";
import Hero from "../components/Hero";
import DailyServiceCard from "../components/DailyServiceCard";
import { services } from "../data/services";

const trustPoints = [
  { title: "Safe travel", text: "Verified operators and support-first travel planning." },
  { title: "Comfort first", text: "Comfortable seating, air-conditioned coaches, and clean routes." },
  { title: "On-time departures", text: "Planned departures with service reliability and route visibility." },
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
            <h2>Popular routes for quick planning</h2>
          </div>
        </div>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <Link key={destination} href={`/booking?from=Ahmedabad&to=${encodeURIComponent(destination)}`} className="destination-card">
              <span>{destination}</span>
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
