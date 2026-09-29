import type { Bus, BusLayout } from "../types/bus";

export const busLayouts: Record<string, BusLayout> = {
  seat32: {
    id: "layout-seat-32",
    name: "2(C) × 2(D) Seater",
    template: "2C2D",
    rows: 8,
    columns: 4,
    deckType: "Single Deck",
    deck: "Lower",
    items: [
      { id: "a1", type: "Seat", deck: "Lower", row: 1, column: 1, side: "C", label: "A1", status: "Available" },
      { id: "a2", type: "Seat", deck: "Lower", row: 1, column: 2, side: "C", label: "A2", status: "Available" },
      { id: "a3", type: "Seat", deck: "Lower", row: 1, column: 3, side: "D", label: "A3", status: "Occupied" },
      { id: "a4", type: "Seat", deck: "Lower", row: 1, column: 4, side: "D", label: "A4", status: "Available" },
      { id: "b1", type: "Seat", deck: "Lower", row: 2, column: 1, side: "C", label: "B1", status: "Available" },
      { id: "b2", type: "Seat", deck: "Lower", row: 2, column: 2, side: "C", label: "B2", status: "Selected" },
      { id: "b3", type: "Seat", deck: "Lower", row: 2, column: 3, side: "D", label: "B3", status: "Blocked" },
      { id: "b4", type: "Seat", deck: "Lower", row: 2, column: 4, side: "D", label: "B4", status: "Available" },
      { id: "c1", type: "Seat", deck: "Lower", row: 3, column: 1, side: "C", label: "C1", status: "Available" },
      { id: "c2", type: "Seat", deck: "Lower", row: 3, column: 2, side: "C", label: "C2", status: "Available" },
      { id: "c3", type: "Seat", deck: "Lower", row: 3, column: 3, side: "D", label: "C3", status: "Available" },
      { id: "c4", type: "Seat", deck: "Lower", row: 3, column: 4, side: "D", label: "C4", status: "Available" }
    ]
  },
  sleeper: {
    id: "layout-sleeper-1x2",
    name: "1(C) × 2(D) Sleeper",
    template: "1C2D",
    rows: 10,
    columns: 3,
    deckType: "Single Deck",
    deck: "Lower",
    items: [
      { id: "l1", type: "Sleeper", deck: "Lower", row: 1, column: 1, side: "C", label: "L1", status: "Available" },
      { id: "l2", type: "Sleeper", deck: "Lower", row: 1, column: 2, side: "C", label: "L2", status: "Available" },
      { id: "l3", type: "Sleeper", deck: "Lower", row: 1, column: 3, side: "D", label: "L3", status: "Occupied" },
      { id: "l4", type: "Sleeper", deck: "Lower", row: 2, column: 1, side: "C", label: "L4", status: "Available" },
      { id: "l5", type: "Sleeper", deck: "Lower", row: 2, column: 2, side: "C", label: "L5", status: "Selected" },
      { id: "l6", type: "Sleeper", deck: "Lower", row: 2, column: 3, side: "D", label: "L6", status: "Blocked" }
    ]
  },
  sofa: {
    id: "layout-sofa-1x2",
    name: "1(C) × 2(D) Sofa",
    template: "1C2D",
    rows: 8,
    columns: 3,
    deckType: "Single Deck",
    deck: "Lower",
    items: [
      { id: "s1", type: "Sofa", deck: "Lower", row: 1, column: 1, side: "C", label: "S1", status: "Available" },
      { id: "s2", type: "Sofa", deck: "Lower", row: 1, column: 2, side: "C", label: "S2", status: "Available" },
      { id: "s3", type: "Sofa", deck: "Lower", row: 1, column: 3, side: "D", label: "S3", status: "Available" }
    ]
  },
  doubleDecker: {
    id: "layout-double-decker",
    name: "Double Decker Sleeper",
    template: "Double Deck",
    rows: 10,
    columns: 4,
    deckType: "Double Deck",
    deck: "Both",
    items: [
      { id: "ul1", type: "Sleeper", deck: "Upper", row: 1, column: 1, side: "C", label: "UL1", status: "Available" },
      { id: "ul2", type: "Sleeper", deck: "Upper", row: 1, column: 2, side: "C", label: "UL2", status: "Available" },
      { id: "ul3", type: "Sleeper", deck: "Upper", row: 1, column: 3, side: "D", label: "UL3", status: "Occupied" },
      { id: "ul4", type: "Sleeper", deck: "Upper", row: 1, column: 4, side: "D", label: "UL4", status: "Available" },
      { id: "ll1", type: "Sleeper", deck: "Lower", row: 1, column: 1, side: "C", label: "LL1", status: "Available" },
      { id: "ll2", type: "Sleeper", deck: "Lower", row: 1, column: 2, side: "C", label: "LL2", status: "Selected" },
      { id: "ll3", type: "Sleeper", deck: "Lower", row: 1, column: 3, side: "D", label: "LL3", status: "Available" },
      { id: "ll4", type: "Sleeper", deck: "Lower", row: 1, column: 4, side: "D", label: "LL4", status: "Blocked" }
    ]
  }
};

export const mockBuses: Bus[] = [
  {
    id: "mn-101",
    operator: "Maa Nageshwari Tours & Travels",
    name: "Maa Nageshwari Executive",
    busNumber: "GJ-01-AX-2025",
    vehicleType: "Luxury",
    busType: "1+2 Luxury Seater",
    source: "Own",
    from: "Ahmedabad",
    to: "Rajkot",
    departure: "06:15",
    arrival: "10:50",
    duration: "4h 35m",
    fare: 850,
    availableSeats: 12,
    amenities: ["AC", "Water Bottle", "Wi-Fi", "Charging", "CCTV"],
    boardingPoints: [
      { id: "bp-1", name: "Paldi", time: "05:45" },
      { id: "bp-2", name: "Iscon Cross Road", time: "06:00" },
      { id: "bp-3", name: "Naranpura", time: "06:10" }
    ],
    droppingPoints: [
      { id: "dp-1", name: "Rajkot Bus Stand", time: "10:55" },
      { id: "dp-2", name: "Bhavnagar Road", time: "11:10" }
    ],
    cancellation: "Free cancellation up to 2 hours before departure.",
    layout: busLayouts.seat32,
    isMock: true
  },
  {
    id: "vrl-201",
    operator: "VRL Travels",
    name: "VRL Deluxe",
    busNumber: "MH-02-VRL-2714",
    vehicleType: "Semi-Sleeper",
    busType: "2+2 Semi Sleeper",
    source: "External API",
    from: "Ahmedabad",
    to: "Mumbai",
    departure: "20:00",
    arrival: "06:45",
    duration: "10h 45m",
    fare: 1420,
    availableSeats: 19,
    amenities: ["AC", "Reading Light", "USB", "Blanket"],
    boardingPoints: [
      { id: "bp-5", name: "S.G. Highway", time: "19:30" },
      { id: "bp-6", name: "Vastrapur", time: "19:40" }
    ],
    droppingPoints: [
      { id: "dp-4", name: "Borivali", time: "06:20" },
      { id: "dp-5", name: "Andheri East", time: "06:45" }
    ],
    cancellation: "Cancellation may be charged by provider.",
    layout: busLayouts.sleeper,
    isMock: true,
    verifiedOverride: {
      busId: "vrl-201",
      operator: "VRL Travels",
      source: "External API",
      originalType: "Semi-Sleeper",
      originalLayout: "2+2 Semi Sleeper",
      verifiedType: "Luxury",
      verifiedLayout: "1+2 Luxury Seater",
      verificationStatus: "Verified",
      reason: "Operator/driver confirmed the current physical configuration by phone.",
      updatedBy: "Pritesh",
      updatedAt: "2026-09-25T12:00:00.000Z",
      layout: busLayouts.seat32
    }
  },
  {
    id: "raj-301",
    operator: "Raj Express",
    name: "Raj Express AC",
    busNumber: "GJ-03-RJ-4897",
    vehicleType: "Seater",
    busType: "2+3 Seater",
    source: "Development Mock",
    from: "Surat",
    to: "Vadodara",
    departure: "07:30",
    arrival: "09:40",
    duration: "2h 10m",
    fare: 540,
    availableSeats: 26,
    amenities: ["AC", "Pushback Seats", "Mobile Charging"],
    boardingPoints: [
      { id: "bp-7", name: "Adajan", time: "07:00" },
      { id: "bp-8", name: "Athwa Gate", time: "07:15" }
    ],
    droppingPoints: [
      { id: "dp-6", name: "Baroda Central", time: "09:25" }
    ],
    cancellation: "Operator cancellation policy applies.",
    layout: busLayouts.seat32,
    isMock: true
  },
  {
    id: "sharma-401",
    operator: "Sharma Travels",
    name: "Sharma Deluxe Sleeper",
    busNumber: "GJ-19-SH-8840",
    vehicleType: "Sleeper",
    busType: "1+2 Sleeper",
    source: "External API",
    from: "Rajkot",
    to: "Ahmedabad",
    departure: "18:20",
    arrival: "22:55",
    duration: "4h 35m",
    fare: 930,
    availableSeats: 9,
    amenities: ["AC", "Sleeper Berth", "Wi-Fi", "Water Bottle"],
    boardingPoints: [
      { id: "bp-9", name: "Rajkot Market", time: "17:45" }
    ],
    droppingPoints: [
      { id: "dp-7", name: "Satellite", time: "22:40" },
      { id: "dp-8", name: "Ahmedabad Airport", time: "22:55" }
    ],
    cancellation: "No cancellation within 6 hours of departure.",
    layout: busLayouts.sleeper,
    isMock: true
  },
  {
    id: "double-501",
    operator: "Maa Nageshwari Tours & Travels",
    name: "Double Decker Royale",
    busNumber: "GJ-01-DK-7155",
    vehicleType: "Double Decker",
    busType: "Double Decker Sleeper",
    source: "Own",
    from: "Ahmedabad",
    to: "Delhi",
    departure: "21:10",
    arrival: "11:20",
    duration: "14h 10m",
    fare: 1950,
    availableSeats: 14,
    amenities: ["Double Decker", "AC", "Leg Rest", "TV", "Charging"],
    boardingPoints: [{ id: "bp-10", name: "Gita Mandir", time: "20:30" }],
    droppingPoints: [{ id: "dp-9", name: "Delhi ISBT", time: "11:00" }],
    cancellation: "24-hour refund on selected fares.",
    layout: busLayouts.doubleDecker,
    isMock: true
  }
];

export default mockBuses;
