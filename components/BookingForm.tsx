"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchBuses, formatCurrency, getBusEffectiveType } from "../lib/booking";
import BusCard from "./BusCard";
import type { BusSearchResult } from "../types/bus";

const defaultPassenger = {
  name: "",
  age: 25,
  gender: "Male",
  mobile: "",
  email: "",
};

const buildReturnDate = (date: string) => {
  if (!date) return "2026-09-30";
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate.toISOString().slice(0, 10);
};

export default function BookingForm() {
  const params = useSearchParams();
  const from = params.get("from") || "Ahmedabad";
  const to = params.get("to") || "Rajkot";
  const date = params.get("date") || "2026-09-30";
  const tripType = params.get("tripType") === "Return" ? "Return" : "One Way";

  const outwardResults = useMemo(() => searchBuses({ from, to, date, tripType: "One Way" }), [from, to, date]);
  const returnDate = buildReturnDate(date);
  const returnResults = useMemo(() => searchBuses({ from: to, to: from, date: returnDate, tripType: "One Way" }), [to, from, returnDate]);

  const [selectedBus, setSelectedBus] = useState<BusSearchResult | null>(null);
  const [boardingPoint, setBoardingPoint] = useState("");
  const [droppingPoint, setDroppingPoint] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [sameBusReturn, setSameBusReturn] = useState(true);
  const [returnBus, setReturnBus] = useState<BusSearchResult | null>(null);
  const [passengers, setPassengers] = useState([{ ...defaultPassenger, id: "p1" }]);
  const [step, setStep] = useState<"results" | "detail" | "passengers" | "payment" | "confirmation">("results");
  const [bookingId, setBookingId] = useState("MN-DEV-0001");

  const handleCancel = () => {
    setSelectedBus(null);
    setBoardingPoint("");
    setDroppingPoint("");
    setSelectedSeats([]);
    setSameBusReturn(true);
    setReturnBus(null);
    setPassengers([{ ...defaultPassenger, id: "p1" }]);
    setStep("results");
  };

  const handleSeatToggle = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const handlePassengerChange = (field: keyof typeof defaultPassenger, value: string | number, index: number) => {
    setPassengers((prev) =>
      prev.map((passenger, passengerIndex) =>
        passengerIndex === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  const baseFare = selectedBus?.fare ?? 0;
  const taxes = Math.round(baseFare * 0.12);
  const totalFare = baseFare + taxes + selectedSeats.length * 25;

  const canProceedFromResults = Boolean(selectedBus);
  const canProceedToPayment =
    Boolean(selectedBus) &&
    Boolean(boardingPoint) &&
    Boolean(droppingPoint) &&
    selectedSeats.length > 0 &&
    passengers.every((person) => person.name.trim() && person.mobile.trim());

  const returnReady = tripType === "Return"
    ? sameBusReturn
      ? Boolean(selectedBus)
      : Boolean(selectedBus && returnBus)
    : true;

  const onSelectBus = (bus: BusSearchResult) => {
    setSelectedBus(bus);
    setBoardingPoint(bus.boardingPoints[0]?.name || "Not provided by operator");
    setDroppingPoint(bus.droppingPoints[0]?.name || "Not provided by operator");
    setStep("detail");
  };

  const renderSeatMap = () => {
    if (!selectedBus) return null;
    const items = selectedBus.layout.items;

    return (
      <div className="seat-map-shell">
        <div className="seat-map-header">
          <strong>{selectedBus.layout.name}</strong>
          <span>{selectedBus.layout.deckType}</span>
        </div>
        <div className="seat-map-grid">
          {items.map((seat) => {
            const isSelected = selectedSeats.includes(seat.id);
            const isBlocked = seat.status === "Blocked" || seat.status === "Occupied";
            return (
              <button
                key={seat.id}
                type="button"
                className={`seat-unit ${seat.type.toLowerCase()} ${isSelected ? "selected" : ""} ${isBlocked ? "blocked" : ""}`}
                disabled={isBlocked}
                onClick={() => handleSeatToggle(seat.id)}
              >
                <span>{seat.label}</span>
                <small>{seat.type}</small>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderResults = () => (
    <div className="booking-layout">
      <aside className="booking-sidebar">
        <h3>Search summary</h3>
        <div className="summary-card">
          <p>{from} → {to}</p>
          <p>{date}</p>
          <p>{tripType} trip</p>
        </div>
        {tripType === "Return" && (
          <div className="summary-card">
            <div className="toggle-row">
              <span>Use same bus for return</span>
              <input type="checkbox" checked={sameBusReturn} onChange={() => setSameBusReturn((value) => !value)} />
            </div>
            {!sameBusReturn && (
              <div className="stack-list">
                {returnResults.slice(0, 3).map((bus) => (
                  <button key={bus.id} type="button" className={`result-chip ${returnBus?.id === bus.id ? "selected" : ""}`} onClick={() => setReturnBus(bus)}>
                    {bus.operator} • {bus.busNumber}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </aside>

      <section className="content-panel">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Available buses</p>
            <h2>{outwardResults.length} results</h2>
          </div>
          <button type="button" className="secondary-button" onClick={handleCancel}>Cancel Booking</button>
        </div>

        <div className="results-list">
          {outwardResults.map((bus) => (
            <BusCard key={bus.id} bus={bus} onSelect={onSelectBus} />
          ))}
        </div>
      </section>
    </div>
  );

  const renderDetail = () => (
    <div className="content-panel detail-panel">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Bus details</p>
          <h2>{selectedBus?.name}</h2>
        </div>
        <button type="button" className="secondary-button" onClick={handleCancel}>Cancel Booking</button>
      </div>

      {selectedBus && (
        <>
          <div className="detail-grid">
            <div className="feature-card">
              <div className="mini-visual" />
              <h3>{selectedBus.operator}</h3>
              <p>{selectedBus.busNumber}</p>
              <p>{getBusEffectiveType(selectedBus)} • {selectedBus.source}</p>
              <p>{selectedBus.departure} → {selectedBus.arrival} • {selectedBus.duration}</p>
            </div>
            <div className="feature-card">
              <h3>Boarding &amp; dropping</h3>
              <label>
                Boarding point
                <select value={boardingPoint} onChange={(event) => setBoardingPoint(event.target.value)}>
                  {selectedBus.boardingPoints.length ? selectedBus.boardingPoints.map((point) => (
                    <option key={point.id} value={point.name}>{point.name} ({point.time})</option>
                  )) : <option value="Not provided by operator">Not provided by operator</option>}
                </select>
              </label>
              <label>
                Dropping point
                <select value={droppingPoint} onChange={(event) => setDroppingPoint(event.target.value)}>
                  {selectedBus.droppingPoints.length ? selectedBus.droppingPoints.map((point) => (
                    <option key={point.id} value={point.name}>{point.name} ({point.time})</option>
                  )) : <option value="Not provided by operator">Not provided by operator</option>}
                </select>
              </label>
            </div>
          </div>

          {renderSeatMap()}

          <div className="inline-actions">
            <button className="secondary-button" type="button" onClick={() => setStep("results")}>Back</button>
            <button className="primary-button" type="button" disabled={!canProceedFromResults || !boardingPoint || !droppingPoint} onClick={() => setStep("passengers")}>Continue</button>
          </div>
        </>
      )}
    </div>
  );

  const renderPassengers = () => (
    <div className="content-panel detail-panel">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Passenger details</p>
          <h2>Traveler information</h2>
        </div>
        <button type="button" className="secondary-button" onClick={handleCancel}>Cancel Booking</button>
      </div>

      <div className="passenger-form-grid">
        {passengers.map((passenger, index) => (
          <div key={passenger.id || index} className="feature-card passenger-card">
            <h3>Passenger {index + 1}</h3>
            <label>
              Name
              <input value={passenger.name} onChange={(event) => handlePassengerChange("name", event.target.value, index)} />
            </label>
            <label>
              Age
              <input type="number" value={passenger.age} onChange={(event) => handlePassengerChange("age", Number(event.target.value), index)} />
            </label>
            <label>
              Gender
              <select value={passenger.gender} onChange={(event) => handlePassengerChange("gender", event.target.value, index)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Mobile
              <input value={passenger.mobile} onChange={(event) => handlePassengerChange("mobile", event.target.value, index)} />
            </label>
            <label>
              Email
              <input type="email" value={passenger.email} onChange={(event) => handlePassengerChange("email", event.target.value, index)} />
            </label>
          </div>
        ))}
      </div>

      <div className="inline-actions">
        <button className="secondary-button" type="button" onClick={() => setStep("detail")}>Back</button>
        <button className="primary-button" type="button" onClick={() => setStep("payment")} disabled={!canProceedToPayment}>Review fare</button>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="content-panel detail-panel">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Fare summary</p>
          <h2>Mock payment</h2>
        </div>
        <button type="button" className="secondary-button" onClick={handleCancel}>Cancel Booking</button>
      </div>

      <div className="summary-card">
        <p><strong>Bus:</strong> {selectedBus?.name}</p>
        <p><strong>Boarding:</strong> {boardingPoint}</p>
        <p><strong>Dropping:</strong> {droppingPoint}</p>
        <p><strong>Seats:</strong> {selectedSeats.join(", ") || "None selected"}</p>
        <p><strong>Passengers:</strong> {passengers.length}</p>
        <p><strong>Base Fare:</strong> {formatCurrency(baseFare)}</p>
        <p><strong>Taxes:</strong> {formatCurrency(taxes)}</p>
        <p><strong>Total:</strong> {formatCurrency(totalFare)}</p>
      </div>

      <div className="inline-actions">
        <button className="secondary-button" type="button" onClick={() => setStep("passengers")}>Back</button>
        <button className="primary-button" type="button" onClick={() => {
          setBookingId(`MN-${Date.now().toString().slice(-6)}`);
          setStep("confirmation");
        }}>
          Pay now (mock)
        </button>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="content-panel detail-panel">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Booking confirmed</p>
          <h2>Development mock confirmation</h2>
        </div>
        <button type="button" className="secondary-button" onClick={handleCancel}>New booking</button>
      </div>

      <div className="summary-card">
        <p><strong>Booking ID:</strong> {bookingId}</p>
        <p><strong>Operator:</strong> {selectedBus?.operator}</p>
        <p><strong>Bus:</strong> {selectedBus?.name}</p>
        <p><strong>Journey:</strong> {from} → {to}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Boarding:</strong> {boardingPoint}</p>
        <p><strong>Dropping:</strong> {droppingPoint}</p>
        <p><strong>Selected units:</strong> {selectedSeats.join(", ")}</p>
        <p><strong>Fare:</strong> {formatCurrency(totalFare)}</p>
        <p><strong>Status:</strong> Development mock booking</p>
      </div>
    </div>
  );

  return (
    <main className="page-shell">
      {step === "results" && renderResults()}
      {step === "detail" && renderDetail()}
      {step === "passengers" && renderPassengers()}
      {step === "payment" && renderPayment()}
      {step === "confirmation" && renderConfirmation()}
    </main>
  );
}
