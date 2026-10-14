import type { Hour, Settings } from '../services/types';
import { hourLabel, toTemp } from '../lib/units';

// A row of small chips you can scroll sideways: one per hour.
export default function HourlyList({ hours, settings }: { hours: Hour[]; settings: Settings }) {
  return (
    <ul className="hours" aria-label="Hourly forecast">
      {hours.map((h, i) => (
        <li key={h.time} className={i === 0 ? 'chip now' : 'chip'}>
          <small>{i === 0 ? 'Now' : hourLabel(h.time)}</small>
          <b>{toTemp(h.temp, settings.tempUnit)}°</b>
        </li>
      ))}
    </ul>
  );
}
