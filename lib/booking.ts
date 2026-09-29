import type { BusSearchRequest, BusSearchResult } from "../types/bus";
import { mockBuses } from "../data/buses";

export const normalizeText = (value: string) => value.trim().toLowerCase();

export const searchBuses = (request: BusSearchRequest): BusSearchResult[] => {
  const from = normalizeText(request.from);
  const to = normalizeText(request.to);

  return mockBuses
    .filter((bus) => normalizeText(bus.from) === from && normalizeText(bus.to) === to)
    .map((bus) => ({
      ...bus,
      operatorCode: bus.operator.slice(0, 3).toUpperCase(),
    }));
};

export const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export const getBusEffectiveType = (bus: { verifiedOverride?: { verifiedType?: string }; vehicleType?: string; busType?: string }) => {
  if (bus.verifiedOverride?.verifiedType) {
    return bus.verifiedOverride.verifiedType;
  }
  return bus.busType || bus.vehicleType || "Not provided";
};
