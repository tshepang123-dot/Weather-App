import Icon from '../components/Icon';
import './Permission.css';

interface Props {
  message: string; // shown when something goes wrong, e.g. location is blocked
  onAllow: () => void;
  onSearch: () => void;
  onPrivacy: () => void;
}

// First screen: explains why we ask for location before the browser prompt appears.
export default function Permission({ message, onAllow, onSearch, onPrivacy }: Props) {
  return (
    <main className="screen permission">
      <div className="perm-top">
        <div className="perm-circle">
          <Icon name="pin" size={80} />
        </div>
        <h1>Allow location access</h1>
        <p>We use your location only to show the weather where you are. You can change this at any time.</p>
        {message && (
          <p className="notice" role="status">
            {message}
          </p>
        )}
      </div>

      <div className="perm-actions">
        <button className="primary" onClick={onAllow}>
          Allow while using the app
        </button>
        <button className="outline" onClick={onSearch}>
          Search for a city instead
        </button>
        <button className="link" onClick={onPrivacy}>
          Privacy policy
        </button>
      </div>
    </main>
  );
}
