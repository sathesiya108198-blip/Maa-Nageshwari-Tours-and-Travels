import { mockBuses } from "../data/buses";
import type { Bus, BusSearchRequest, BusSearchResult } from "../types/bus";

export interface BusSearchProvider {
  search(request: BusSearchRequest): Promise<BusSearchResult[]>;
}

export interface BusBookingProvider {
  createBooking(payload: unknown): Promise<{ bookingId: string }>;
}

export interface OtpProvider {
  sendOtp(username: string): Promise<{ otp: string; expiresInMs: number }>;
  verifyOtp(username: string, otp: string): Promise<boolean>;
}

export class DevelopmentBusProvider implements BusSearchProvider {
  async search(request: BusSearchRequest): Promise<BusSearchResult[]> {
    const from = request.from.trim().toLowerCase();
    const to = request.to.trim().toLowerCase();

    return mockBuses
      .filter((bus) => bus.from.toLowerCase() === from && bus.to.toLowerCase() === to)
      .map((bus) => ({
        ...bus,
        operatorCode: bus.operator.slice(0, 3).toUpperCase(),
      }));
  }
}

export class DevelopmentOtpProvider implements OtpProvider {
  private static challenges = new Map<string, { otp: string; expiresAt: number }>();

  async sendOtp(username: string): Promise<{ otp: string; expiresInMs: number }> {
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 5 * 60 * 1000;
    DevelopmentOtpProvider.challenges.set(username, { otp, expiresAt });
    console.log(`DEV OTP: ${otp}`);
    return { otp, expiresInMs: 5 * 60 * 1000 };
  }

  async verifyOtp(username: string, otp: string): Promise<boolean> {
    const entry = DevelopmentOtpProvider.challenges.get(username);
    if (!entry) return false;
    if (Date.now() > entry.expiresAt) {
      DevelopmentOtpProvider.challenges.delete(username);
      return false;
    }
    const isValid = entry.otp === otp;
    if (isValid) {
      DevelopmentOtpProvider.challenges.delete(username);
    }
    return isValid;
  }
}

export const developmentProvider = new DevelopmentBusProvider();
export const developmentOtpProvider = new DevelopmentOtpProvider();

export const mergeCustomerLayout = (bus: Bus) => {
  if (bus.verifiedOverride?.verifiedType) {
    return {
      ...bus,
      vehicleType: bus.verifiedOverride.verifiedType,
      busType: bus.verifiedOverride.verifiedLayout,
      layout: bus.verifiedOverride.layout,
    };
  }
  return bus;
};
