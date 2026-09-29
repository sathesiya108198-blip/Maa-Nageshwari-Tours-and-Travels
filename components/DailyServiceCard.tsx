import type { services as serviceList } from "../data/services";

export default function DailyServiceCard({ service }: { service: (typeof serviceList)[number] }) {
  return (
    <article className="feature-card service-card">
      <div className="service-header-row">
        <span className="badge">{service.status}</span>
        <strong>{service.frequency}</strong>
      </div>
      <h3>{service.service}</h3>
      <p>{service.route}</p>
      <div className="meta-grid">
        <span>{service.departure} departure</span>
        <span>{service.arrival} arrival</span>
      </div>
      <div className="pill-row">
        {service.days.map((day) => (
          <span key={day} className="chip">{day}</span>
        ))}
      </div>
      <strong>From ₹{service.fare}</strong>
    </article>
  );
}
