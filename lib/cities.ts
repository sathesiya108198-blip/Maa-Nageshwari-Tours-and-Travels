import { cities, citySuggestions } from "../data/cities";
import { villages, villageSuggestions } from "../data/villages";

export const allLocationOptions = [...citySuggestions, ...villageSuggestions].sort((a, b) => a.label.localeCompare(b.label));

export const getLocationSuggestions = (query: string) => {
  const value = query.trim().toLowerCase();
  if (!value) return allLocationOptions.slice(0, 12);

  return allLocationOptions.filter((item) => item.label.toLowerCase().includes(value)).slice(0, 12);
};

export const isValidLocation = (value: string) => {
  return cities.includes(value) || villages.includes(value);
};
