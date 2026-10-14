import type { Kind } from '../utils/weatherCodes';

// Simple drawn weather icons in the design's colours (cloud #E2DBD0, accent #F9EE29).
export default function WeatherIcon({ kind, size = 32 }: { kind: Kind; size?: number }) {
  const cloud = (
    <g fill="#E2DBD0">
      <circle cx="12" cy="16" r="7" />
      <circle cx="22" cy="14" r="8" />
      <rect x="5" y="16" width="26" height="9" rx="4.5" />
    </g>
  );

  let body;
  switch (kind) {
    case 'sun':
      body = (
        <g>
          <circle cx="18" cy="19" r="8" fill="#F9EE29" />
          <path
            d="M18 5v3M18 30v3M4 19h3M29 19h3M8 9l2 2M26 27l2 2M28 9l-2 2M10 27l-2 2"
            stroke="#F9EE29"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      );
      break;
    case 'moon':
      body = <path d="M24 6a13 13 0 1 0 8 20 10 10 0 0 1-8-20z" fill="#E2DBD0" />;
      break;
    case 'partly':
      body = (
        <g>
          <circle cx="27" cy="9" r="6" fill="#F9EE29" />
          {cloud}
        </g>
      );
      break;
    case 'fog':
      body = (
        <g>
          {cloud}
          <path d="M6 29h24M10 34h20" stroke="#E2DBD0" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
      break;
    case 'rain':
      body = (
        <g>
          {cloud}
          <path d="M12 29l-1 4M19 29l-1 4M26 29l-1 4" stroke="#13B8F9" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
      break;
    case 'snow':
      body = (
        <g>
          {cloud}
          <g fill="#FFFFFF">
            <circle cx="12" cy="31" r="1.8" />
            <circle cx="19" cy="34" r="1.8" />
            <circle cx="26" cy="31" r="1.8" />
          </g>
        </g>
      );
      break;
    case 'storm':
      body = (
        <g>
          {cloud}
          <polygon points="20,22 14,32 19,32 17,37 26,26 21,26 24,22" fill="#F9EE29" />
        </g>
      );
      break;
    default:
      body = cloud;
  }

  return (
    <svg width={size} height={size} viewBox="0 0 36 38" aria-hidden="true">
      {body}
    </svg>
  );
}
