"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CityAutocomplete from "./CityAutocomplete";
import DatePicker from "./DatePicker";

export default function BusSearch() {
  const router = useRouter();
  const [from, setFrom] = useState("Ahmedabad");
  const [to, setTo] = useState("Rajkot");
  const [date, setDate] = useState("2026-09-30");
  const [tripType, setTripType] = useState<"One Way" | "Return">("One Way");

  const handleSubmit = () => {
    if (!from || !to || !date) return;
    const params = new URLSearchParams({
      from,
      to,
      date,
      tripType,
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="search-panel">
      <div className="trip-toggle">
        <button
          type="button"
          className={tripType === "One Way" ? "active" : ""}
          onClick={() => setTripType("One Way")}
        >
          One Way
        </button>
        <button
          type="button"
          className={tripType === "Return" ? "active" : ""}
          onClick={() => setTripType("Return")}
        >
          Return Booking
        </button>
      </div>

      <div className="search-grid">
        <label>
          From
          <CityAutocomplete value={from} placeholder="Select source city" onChange={setFrom} />
        </label>

        <button
          className="swap-button"
          type="button"
          onClick={() => {
            const nextFrom = to;
            const nextTo = from;
            setFrom(nextFrom);
            setTo(nextTo);
          }}
          aria-label="Swap cities"
        >
          ⇄
        </button>

        <label>
          To
          <CityAutocomplete value={to} placeholder="Select destination city" onChange={setTo} />
        </label>

        <label>
          Travel Date
          <DatePicker value={date} onChange={setDate} />
        </label>
      </div>

      <button className="primary-button search-button" type="button" onClick={handleSubmit}>
        Search Buses
      </button>
    </div>
  );
}
