import type { Day, Hour, Settings, Weather } from '../services/types';

// SAMPLE data so we can build and style the Home page first.
// In the weather-api branch this is replaced by real data.

export const defaultSettings: Settings = {
  tempUnit: 'C',
  windUnit: 'kmh',
  theme: 'dark',
  alertsOn: true,
};

const pad = (n: number) => String(n).padStart(2, '0');
const dateKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

const TEMPS = [21, 22, 22, 20, 19, 18, 17, 16, 16, 15, 15, 14, 14, 15, 17, 19, 21, 22, 22, 21, 20, 19, 18, 17];
const CODES = [95, 95, 95, 61, 61, 3, 3, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 61, 61, 3, 3, 2];
const DAYS: [number, number, number][] = [
  [20, 14, 61], [22, 16, 61], [19, 13, 95], [18, 12, 3], [23, 19, 95], [24, 17, 0], [21, 15, 3],
];

export function mockWeather(): Weather {
  const start = new Date();
  start.setMinutes(0, 0, 0);

  const hours: Hour[] = TEMPS.map((temp, i) => {
    const d = new Date(start);
    d.setHours(start.getHours() + i);
    return {
      time: `${dateKey(d)}T${pad(d.getHours())}:00`,
      temp,
      code: CODES[i],
      isDay: d.getHours() >= 6 && d.getHours() < 18,
      gust: 20,
      precip: 0,
    };
  });

  const days: Day[] = DAYS.map(([max, min, code], i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return { date: dateKey(d), max, min, code, rainChance: 40 };
  });

  return {
    current: { temp: 21, feels: 19, humidity: 24, wind: 13, code: 95, isDay: true, rainChance: 87 },
    hours,
    days,
    fetchedAt: Date.now(),
  };
}
