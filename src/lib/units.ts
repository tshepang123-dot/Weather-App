import type { Settings } from '../services/types';

// Weather values are stored in °C and km/h. These convert them for display.
export const toTemp = (c: number, unit: Settings['tempUnit']) =>
  Math.round(unit === 'C' ? c : (c * 9) / 5 + 32);

export const toWind = (kmh: number, unit: Settings['windUnit']) =>
  Math.round(unit === 'kmh' ? kmh : kmh * 0.621371);

export const windLabel = (unit: Settings['windUnit']) => (unit === 'kmh' ? 'km/h' : 'mph');

// "2026-10-13T14:00" -> "14:00"
export const hourLabel = (time: string) => time.slice(11, 16);

// "2026-10-13" -> "Tue" (the first day is shown as "Today")
export const dayLabel = (date: string, index: number) =>
  index === 0 ? 'Today' : new Date(date + 'T00:00').toLocaleDateString('en', { weekday: 'short' });