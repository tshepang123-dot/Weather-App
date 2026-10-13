// All weather values are stored in metric (°C, km/h, mm) and converted when shown.

export interface Place {
  id: string;
  name: string;
  country?: string;
  lat: number;
  lon: number;
}

export interface Current {
  temp: number;
  feels: number;
  humidity: number;
  wind: number;
  code: number;
  isDay: boolean;
  rainChance: number;
}

export interface Hour {
  time: string; // "2026-10-12T14:00"
  temp: number;
  code: number;
  isDay: boolean;
  gust: number;
  precip: number;
}

export interface Day {
  date: string; // "2026-10-12"
  code: number;
  max: number;
  min: number;
  rainChance: number;
}

export interface Weather {
  current: Current;
  hours: Hour[]; // next 24 hours
  days: Day[]; // 7 days
  fetchedAt: number;
}

export interface Settings {
  tempUnit: 'C' | 'F';
  windUnit: 'kmh' | 'mph';
  theme: 'light' | 'dark' | 'auto';
  alertsOn: boolean;
}

export type Page = 'permission' | 'home' | 'search' | 'locations' | 'settings' | 'privacy';