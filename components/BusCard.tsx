import type { BusSearchResult } from "../types/bus";
import { formatCurrency } from "../lib/booking";

export default function BusCard({
  bus,
  onSelect,
}: {
  bus: BusSearchResult;
  onSelect: (bus: BusSearchResult) => void;
}) {
  return (
    <article className="bus-card">
      <div className="bus-card-head">
        <div>
          <p className="bus-operator">{bus.operator}</p>
          <h3>{bus.name}</h3>
        </div>
        <span className="badge">{bus.source}</span>
      </div>

      <div className="meta-grid">
        <span>{bus.from} → {bus.to}</span>
        <span>{bus.departure} - {bus.arrival}</span>
        <span>{bus.duration}</span>
      </div>

      <div className="fare-row">
        <strong>{formatCurrency(bus.fare)}</strong>
        <span>{bus.availableSeats} seats left</span>
      </div>

      <div className="pill-row">
        <span className="chip">{bus.vehicleType}</span>
        <span className="chip">{bus.busType}</span>
        <span className="chip">{bus.amenities[0]}</span>
      </div>

      <button type="button" className="primary-button" onClick={() => onSelect(bus)}>
        Select Bus
      </button>
    </article>
  );
}
