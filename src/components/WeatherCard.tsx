import type { Settings, Weather } from '../types';
import { cardTone, describe } from '../lib/weatherCodes';
import { toTemp, toWind, windLabel } from '../lib/units';
import WeatherIcon from './WeatherIcon';

// The big blue card on Home: icon, temperature, condition and the three key numbers.
export default function WeatherCard({ weather, settings }: { weather: Weather; settings: Settings }) {
  const c = weather.current;
  const { label, kind } = describe(c.code, c.isDay);

  return (
    <section className="card" data-tone={cardTone(c.code, c.isDay)} aria-label="Current weather">
      <WeatherIcon kind={kind} size={170} />
      <div className="temp">{toTemp(c.temp, settings.tempUnit)}°</div>
      <div className="cond">{label}</div>
      <div className="pill">Feels like {toTemp(c.feels, settings.tempUnit)}°</div>

      <div className="stats">
        <div>
          <b>
            {toWind(c.wind, settings.windUnit)} {windLabel(settings.windUnit)}
          </b>
          <span>Wind</span>
        </div>
        <div>
          <b>{Math.round(c.humidity)}%</b>
          <span>Humidity</span>
        </div>
        <div>
          <b>{Math.round(c.rainChance)}%</b>
          <span>Chance of rain</span>
        </div>
      </div>
    </section>
  );
}
