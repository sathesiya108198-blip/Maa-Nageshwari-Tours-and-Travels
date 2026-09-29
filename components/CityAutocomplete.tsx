"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getLocationSuggestions } from "../lib/cities";

const defaultPopularCities = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",
  "Mumbai",
  "Delhi",
  "Jaipur",
  "Indore",
];

export default function CityAutocomplete({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const suggestions = useMemo(() => getLocationSuggestions(query), [query]);

  return (
    <div className="autocomplete" ref={ref}>
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          onChange(event.target.value);
          setOpen(true);
        }}
      />
      {open && (
        <div className="autocomplete-panel">
          <div className="autocomplete-header">Popular Cities in Gujarat</div>
          {suggestions.length > 0 ? (
            <ul className="autocomplete-list">
              {suggestions.map((item) => (
                <li key={item.value}>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery(item.label);
                      onChange(item.label);
                      setOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    <small>{defaultPopularCities.includes(item.label) ? "Popular" : "City"}</small>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="autocomplete-empty">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
}
