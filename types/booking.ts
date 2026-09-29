export interface Fare {
  baseFare: number;
  taxes: number;
  total: number;
}

export interface Passenger {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  mobile: string;
  email: string;
}

export interface Journey {
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  busId: string;
  busName: string;
  operator: string;
  boardingPoint: string;
  droppingPoint: string;
  seatIds: string[];
}

export interface BookingSelection {
  outward?: Journey;
  returnJourney?: Journey;
  isSameBusReturn: boolean;
  selectedSeats: string[];
  passengers: Passenger[];
  fare: Fare;
}

export interface Booking {
  id: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  createdAt: string;
  journey: Journey;
  returnJourney?: Journey;
  passengers: Passenger[];
  fare: Fare;
  paymentStatus: "Mock" | "Pending" | "Paid";
  isDevelopment: boolean;
}

export interface LayoutVerification {
  busId: string;
  operator: string;
  originalApiType: string;
  originalApiLayout: string;
  adminModifiedType: string;
  adminModifiedLayout: string;
  adminUsername: string;
  verificationStatus: "Pending Verification" | "Verified" | "Rejected" | "Expired/Needs Review";
  reason: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminUser {
  username: string;
  role: "admin";
}

export interface OtpChallenge {
  username: string;
  otp: string;
  expiresAt: number;
  attempts: number;
  lockedUntil: number | null;
}
