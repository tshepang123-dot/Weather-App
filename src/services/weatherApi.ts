import type { Current, Day, Hour, Place, Weather } from './types';

const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

// Always fetches metric values (°C, km/h, mm). Unit conversion happens in lib/units.ts.
export async function fetchWeather(lat: number, lon: number): Promise<Weather> {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current:
      'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day',
    hourly:
      'temperature_2m,weather_code,is_day,wind_gusts_10m,precipitation,precipitation_probability',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    timezone: 'auto',
    forecast_days: '7',
  });

  const res = await fetch(`${FORECAST_URL}?${params}`);
  if (!res.ok) throw new Error('Could not load weather data.');
  const data = await res.json();

  // Find the current hour in the hourly list (current.time looks like "2026-10-14T00:15")
  const currentHour = `${String(data.current.time).slice(0, 13)}:00`;
  const found = (data.hourly.time as string[]).findIndex((t) => t >= currentHour);
  const start = found === -1 ? 0 : found;

  const current: Current = {
    temp: data.current.temperature_2m,
    feels: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    wind: data.current.wind_speed_10m,
    code: data.current.weather_code,
    isDay: data.current.is_day === 1,
    rainChance: data.hourly.precipitation_probability[start] ?? 0,
  };

  const hours: Hour[] = (data.hourly.time as string[])
    .slice(start, start + 24)
    .map((time, i) => ({
      time,
      temp: data.hourly.temperature_2m[start + i],
      code: data.hourly.weather_code[start + i],
      isDay: data.hourly.is_day[start + i] === 1,
      gust: data.hourly.wind_gusts_10m[start + i],
      precip: data.hourly.precipitation[start + i],
    }));

  const days: Day[] = (data.daily.time as string[]).map((date, i) => ({
    date,
    code: data.daily.weather_code[i],
    max: data.daily.temperature_2m_max[i],
    min: data.daily.temperature_2m_min[i],
    rainChance: data.daily.precipitation_probability_max[i] ?? 0,
  }));

  return { current, hours, days, fetchedAt: Date.now() };
}

export async function searchPlaces(query: string): Promise<Place[]> {
  const name = query.trim();
  if (name.length < 2) return [];

  const params = new URLSearchParams({ name, count: '6', language: 'en' });
  const res = await fetch(`${GEOCODING_URL}?${params}`);
  if (!res.ok) throw new Error('Could not search for places.');
  const data = await res.json();

  return (data.results ?? []).map(
    (r: { id: number; name: string; country?: string; latitude: number; longitude: number }) => ({
      id: String(r.id),
      name: r.name,
      country: r.country,
      lat: r.latitude,
      lon: r.longitude,
    })
  );
}