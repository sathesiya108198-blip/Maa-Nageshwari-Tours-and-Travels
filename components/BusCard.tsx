import type { BusSearchResult } from "../types/bus";
import { formatCurrency } from "../lib/booking";

const getBusImage = (bus: BusSearchResult) => {
  if (bus.source === "Own") return "/images/bus-hero.png";
  return "/images/bus-1.jpg";
};

export default function BusCard({
  bus,
  onSelect,
}: {
  bus: BusSearchResult;
  onSelect: (bus: BusSearchResult) => void;
}) {
  const tags = [
    bus.vehicleType,
    bus.busType,
    bus.amenities[0] || "Travel",
    bus.source === "Own" ? "Premium" : "Popular",
  ];

  return (
    <article className="bus-card result-card">
      <div className="bus-card-visual" style={{ backgroundImage: `linear-gradient(135deg, rgba(7,26,51,0.26), rgba(18,56,90,0.16)), url(${getBusImage(bus)})` }} />

      <div className="bus-card-content">
        <div className="bus-card-head">
          <div>
            <p className="bus-operator">{bus.operator}</p>
            <h3>{bus.name}</h3>
          </div>
          <span className="badge">{bus.source}</span>
        </div>

        <div className="pill-row result-tags" aria-label="Bus features">
          {tags.map((tag) => (
            <span key={`${bus.id}-${tag}`} className="chip">{tag}</span>
          ))}
        </div>

        <div className="bus-summary-grid">
          <div>
            <span className="time-label">Departure</span>
            <strong>{bus.departure}</strong>
          </div>
          <div>
            <span className="time-label">Arrival</span>
            <strong>{bus.arrival}</strong>
          </div>
          <div>
            <span className="time-label">Duration</span>
            <strong>{bus.duration}</strong>
          </div>
        </div>

        <div className="route-meta">
          <span>{bus.from} → {bus.to}</span>
          <span>{bus.availableSeats} seats available</span>
        </div>

        <div className="bus-card-footer">
          <div className="fare-box">
            <span>From</span>
            <strong>{formatCurrency(bus.fare)}</strong>
            <small>per seat</small>
          </div>

          <button type="button" className="primary-button select-button" onClick={() => onSelect(bus)}>
            Select Bus
          </button>
        </div>
      </div>
    </article>
  );
}
