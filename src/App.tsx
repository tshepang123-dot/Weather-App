import { useState } from 'react';
import type { Page } from './types';
import { defaultSettings, mockWeather } from './data/mockWeather';
import BottomNav from './components/BottomNav';
import Permission from './pages/Permission';
import Home from './pages/Home';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [message, setMessage] = useState('');
  const [notice, setNotice] = useState('');
  const [weather] = useState(mockWeather); // sample data for now

  // Ask the browser for the user's position (the browser shows its own permission prompt).
  function allowLocation() {
    setMessage('');
    if (!navigator.geolocation) {
      setMessage('Location is not available on this device. Search for a city instead.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => {
        setNotice('');
        setPage('home');
      },
      () => setMessage('Location is blocked. Search for a city instead.'),
      { timeout: 10000 }
    );
  }

  // Only Home exists so far. The other pages come in later branches.
  function go(p: Page) {
    setNotice(p === 'home' ? '' : 'That page is coming in a later step.');
  }

  return (
    <div className="app">
      {page === 'permission' && (
        <Permission
          message={message}
          onAllow={allowLocation}
          onSearch={() => setMessage('City search is coming in a later step.')}
          onPrivacy={() => setMessage('The privacy page is coming in a later step.')}
        />
      )}

      {page === 'home' && (
        <>
          <Home
            placeName="My location"
            weather={weather}
            settings={defaultSettings}
            notice={notice}
            onSoon={() => go('locations')}
          />
          <BottomNav page="home" onGo={go} />
        </>
      )}
    </div>
  );
}
