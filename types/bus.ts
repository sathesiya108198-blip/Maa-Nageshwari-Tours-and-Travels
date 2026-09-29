export type BusType =
  | "Seater"
  | "Sleeper"
  | "Semi-Sleeper"
  | "Sofa"
  | "Mixed"
  | "Luxury"
  | "Double Decker";

export type PassengerUnitType = "Seat" | "Sleeper" | "Sofa";
export type Deck = "Lower" | "Upper";
export type PassengerUnitStatus = "Available" | "Selected" | "Occupied" | "Blocked";
export type SeatSide = "C" | "D";

export interface BusLayoutItem {
  id: string;
  type: PassengerUnitType;
  deck: Deck;
  row: number;
  column: number;
  side: SeatSide;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label: string;
  status: PassengerUnitStatus;
}

export interface BusLayout {
  id: string;
  name: string;
  template: string;
  rows: number;
  columns: number;
  deckType: "Single Deck" | "Double Deck" | "Custom";
  deck: "Lower" | "Upper" | "Both";
  items: BusLayoutItem[];
  notes?: string;
}

export interface BoardingPoint {
  id: string;
  name: string;
  time: string;
  location?: string;
}

export interface DroppingPoint {
  id: string;
  name: string;
  time: string;
  location?: string;
}

export interface Operator {
  id: string;
  name: string;
  code: string;
  logo?: string;
}

export type BusSource = "Own" | "External API" | "Development Mock";

export interface ApiBusData {
  operator: string;
  busNumber: string;
  route: string;
  source: BusSource;
  busType: BusType;
  layout: string;
  departureTime: string;
  arrivalTime: string;
  fare: number;
  availability: number;
  boardingPoints: BoardingPoint[];
  droppingPoints: DroppingPoint[];
  amenities: string[];
}

export interface AdminBusOverride {
  busId: string;
  operator: string;
  source: BusSource;
  originalType: BusType;
  originalLayout: string;
  verifiedType: BusType;
  verifiedLayout: string;
  verificationStatus: "No Override" | "Pending Verification" | "Verified" | "Expired/Needs Review" | "Rejected";
  reason: string;
  updatedBy: string;
  updatedAt: string;
  layout: BusLayout;
}

export interface Bus {
  id: string;
  operator: string;
  name: string;
  busNumber: string;
  vehicleType: BusType;
  busType: string;
  source: BusSource;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  fare: number;
  availableSeats: number;
  amenities: string[];
  boardingPoints: BoardingPoint[];
  droppingPoints: DroppingPoint[];
  cancellation: string;
  layout: BusLayout;
  verifiedOverride?: AdminBusOverride;
  isMock?: boolean;
}

export interface BusSearchRequest {
  from: string;
  to: string;
  date: string;
  tripType: "One Way" | "Return";
}

export interface BusSearchResult extends Bus {
  operatorCode: string;
}
