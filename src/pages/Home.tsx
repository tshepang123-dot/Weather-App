import type { Settings, Weather } from '../services/types';
import Icon from '../components/Icon';
import Banner from '../components/Banner';
import WeatherCard from '../components/WeatherCard';
import HourlyList from '../components/HourlyList';
import './home.css';

interface Props {
  placeName: string;
  weather: Weather;
  settings: Settings;
  notice: string;
  onSoon: () => void; // temporary: buttons whose pages are built in later branches
}

export default function Home({ placeName, weather, settings, notice, onSoon }: Props) {
  return (
    <main className="screen">
      <header className="top">
        <button className="icon-btn" aria-label="Saved locations" onClick={onSoon}>
          <Icon name="list" />
        </button>
        <button className="city-btn" onClick={onSoon}>
          <Icon name="pin" size={20} /> {placeName}
        </button>
        <button className="icon-btn" aria-label="Use my current location" onClick={onSoon}>
          <Icon name="locate" />
        </button>
      </header>
      <h1 className="sr">Weather for {placeName}</h1>

      {notice && (
        <p className="notice" role="status">
          {notice}
        </p>
      )}

      {/* Sample warning. It becomes a real alert in the alerts branch. */}
      <Banner icon="warn">
        <b>Severe thunderstorm warning.</b> Expected around 17:00.
      </Banner>

      <WeatherCard weather={weather} settings={settings} />
      <HourlyList hours={weather.hours} settings={settings} />
    </main>
  );
}
