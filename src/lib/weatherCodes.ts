// The weather service returns a number ("weather code"). This turns it into a label and an icon type.

export type Kind = 'sun' | 'moon' | 'partly' | 'cloud' | 'fog' | 'rain' | 'snow' | 'storm';

export function describe(code: number, isDay = true): { label: string; kind: Kind } {
  if (code === 0) return { label: 'Clear', kind: isDay ? 'sun' : 'moon' };
  if (code <= 2) return { label: 'Partly cloudy', kind: 'partly' };
  if (code === 3) return { label: 'Cloudy', kind: 'cloud' };
  if (code === 45 || code === 48) return { label: 'Fog', kind: 'fog' };
  if (code >= 51 && code <= 57) return { label: 'Drizzle', kind: 'rain' };
  if (code >= 61 && code <= 67) return { label: 'Rain', kind: 'rain' };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { label: 'Snow', kind: 'snow' };
  if (code >= 80 && code <= 82) return { label: 'Showers', kind: 'rain' };
  if (code >= 95) return { label: 'Thunderstorm', kind: 'storm' };
  return { label: 'Cloudy', kind: 'cloud' };
}

// Which card gradient to use (see home.css): the blue design, a night blue, or a grey.
export function cardTone(code: number, isDay: boolean): 'blue' | 'night' | 'grey' {
  if (!isDay) return 'night';
  const { kind } = describe(code, isDay);
  return kind === 'cloud' || kind === 'fog' ? 'grey' : 'blue';
}
