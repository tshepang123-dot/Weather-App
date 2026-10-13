import type { ReactNode } from 'react';
import Icon, { type IconName } from './Icon';

// The strip under the header: used for severe weather warnings and the offline notice.
export default function Banner({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <div className="banner" role="status">
      <span className="warn">
        <Icon name={icon} size={20} />
      </span>
      <span>{children}</span>
    </div>
  );
}
