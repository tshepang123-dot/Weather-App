import type { Page } from '../services/types';
import Icon, { type IconName } from './Icon';

const ITEMS: { page: Page; label: string; icon: IconName }[] = [
  { page: 'home', label: 'Home', icon: 'home' },
  { page: 'locations', label: 'Locations', icon: 'list' },
  { page: 'settings', label: 'Settings', icon: 'sliders' },
];

export default function BottomNav({ page, onGo }: { page: Page; onGo: (p: Page) => void }) {
  return (
    <nav className="nav" aria-label="Main">
      {ITEMS.map((i) => (
        <button key={i.page} aria-current={page === i.page ? 'page' : undefined} onClick={() => onGo(i.page)}>
          <Icon name={i.icon} />
          {i.label}
        </button>
      ))}
    </nav>
  );
}

<nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 flex justify-around py-3 text-white">
  <button>Home</button>
  <button>Locations</button>
  <button>Settings</button>
</nav>
