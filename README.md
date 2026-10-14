# Skyline Weather App

A responsive weather app built with React, TypeScript and Vite. It shows current conditions, hourly and daily forecasts, lets you search for cities, save several locations and customise units and theme.

## Design

Figma file: [Weather App design](# Skyline Weather App

A responsive weather app built with React, TypeScript and Vite. It shows current conditions, hourly and daily forecasts, lets you search for cities, save several locations and customise units and theme.

## Design

Figma file: [Weather App design]https://www.figma.com/design/9RWWW1XFwEUDiXvxK124dd/Weather-App-design?node-id=0-1&t=7PspEkOjpDqajyx9-1E)

Screens in the design:

- Permission (Allow location access)
- Home (current weather, hourly / daily toggle)
- Locations (saved cities)
- Search
- Settings (units, theme, alerts)

Palette and style: blue gradients with a dark navy navigation bar, rounded cards and one consistent typeface across all screens.

## Features

- [x] Location permission screen
- [x] Home screen with temperature, humidity, wind speed, hourly and daily views
- [x] Search for a city
- [x] Save and switch between multiple locations (localStorage)
- [x] Settings page (units, theme, alerts toggle)
- [ ] Live weather data for the current and searched locations
- [ ] Apply temperature / wind units and theme across the app
- [ ] Severe weather notifications
- [ ] Offline access with cached data

## Tech stack

- React + TypeScript (Vite)
- localStorage for saved places, settings and cached data
- [Open-Meteo](https://open-meteo.com/) API for weather and city search (no API key needed)

## Getting started

```bash
git clone https://github.com/tshepang123-dot/Weather-App.git
cd Weather-App
npm install
npm run dev
```

## Project structure

```
src/
  components/   reusable UI (BottomNav, WeatherCard, HourlyList, SegmentedControl ...)
  pages/        Permission, Home, Search, Locations, Settings
  services/     weatherApi.ts (forecast + place search)
  hooks/        useLocalStorage.ts
  lib/          units and weather-code helpers
  types.ts      shared TypeScript types
```

## Step-by-step planning

1. Design all screens in Figma and choose the palette.
2. Set up the Vite React + TypeScript project and connect it to GitHub.
3. Build the Permission and Home screens from the design.
4. Add the weather API layer (forecast and city search).
5. Build Search, Locations and Settings pages.
6. Connect the real location and live weather to Home.
7. Apply units and theme settings.
8. Add notifications for severe weather.
9. Add offline caching.
10. Test at 320, 480, 768, 1024 and 1200px, then optimise performance.

Each step is built on its own git branch and merged into `main` with a pull request.

## Pseudocode

```
START app
  load settings, saved places and active place from localStorage
  show Permission page

  ON "Allow while using the app"
    ask the browser for the user's position
    IF allowed THEN fetch weather for the position and show Home
    ELSE show a message and offer "Search for a city"

  ON typing in Search
    wait 350 ms after the last keystroke
    IF text is shorter than 2 letters THEN clear results
    ELSE call the place search API and list the results

  ON selecting a place
    IF place is not saved THEN add it to saved places
    SET it as the active place
    show Home with a confirmation message

  ON changing a setting
    update settings and save them to localStorage
END
```

## Algorithm

1. Read stored data from localStorage when the app loads.
2. Resolve a location: browser geolocation, or a place chosen from search or the saved list.
3. Request the forecast for those coordinates (metric values).
4. Build the current conditions, the next 24 hours and the next 7 days.
5. Convert units for display only, using the user's settings.
6. Save the latest result so it can be shown offline.
7. Check the forecast for severe conditions and notify the user.)

Screens in the design:

- Permission (Allow location access)
- Home (current weather, hourly / daily toggle)
- Locations (saved cities)
- Search
- Settings (units, theme, alerts)

Palette and style: blue gradients with a dark navy navigation bar, rounded cards and one consistent typeface across all screens.

## Features

- [x] Location permission screen
- [x] Home screen with temperature, humidity, wind speed, hourly and daily views
- [x] Search for a city
- [x] Save and switch between multiple locations (localStorage)
- [x] Settings page (units, theme, alerts toggle)
- [ ] Live weather data for the current and searched locations
- [ ] Apply temperature / wind units and theme across the app
- [ ] Severe weather notifications
- [ ] Offline access with cached data

## Tech stack

- React + TypeScript (Vite)
- localStorage for saved places, settings and cached data
- [Open-Meteo](https://open-meteo.com/) API for weather and city search (no API key needed)

## Getting started

```bash
git clone https://github.com/tshepang123-dot/Weather-App.git
cd Weather-App
npm install
npm run dev
```

## Project structure

```
src/
  components/   reusable UI (BottomNav, WeatherCard, HourlyList, SegmentedControl ...)
  pages/        Permission, Home, Search, Locations, Settings
  services/     weatherApi.ts (forecast + place search)
  hooks/        useLocalStorage.ts
  lib/          units and weather-code helpers
  types.ts      shared TypeScript types
```

## Step-by-step planning

1. Design all screens in Figma and choose the palette.
2. Set up the Vite React + TypeScript project and connect it to GitHub.
3. Build the Permission and Home screens from the design.
4. Add the weather API layer (forecast and city search).
5. Build Search, Locations and Settings pages.
6. Connect the real location and live weather to Home.
7. Apply units and theme settings.
8. Add notifications for severe weather.
9. Add offline caching.
10. Test at 320, 480, 768, 1024 and 1200px, then optimise performance.

Each step is built on its own git branch and merged into `main` with a pull request.

## Pseudocode

```
START app
  load settings, saved places and active place from localStorage
  show Permission page

  ON "Allow while using the app"
    ask the browser for the user's position
    IF allowed THEN fetch weather for the position and show Home
    ELSE show a message and offer "Search for a city"

  ON typing in Search
    wait 350 ms after the last keystroke
    IF text is shorter than 2 letters THEN clear results
    ELSE call the place search API and list the results

  ON selecting a place
    IF place is not saved THEN add it to saved places
    SET it as the active place
    show Home with a confirmation message

  ON changing a setting
    update settings and save them to localStorage
END
```

## Algorithm

1. Read stored data from localStorage when the app loads.
2. Resolve a location: browser geolocation, or a place chosen from search or the saved list.
3. Request the forecast for those coordinates (metric values).
4. Build the current conditions, the next 24 hours and the next 7 days.
5. Convert units for display only, using the user's settings.
6. Save the latest result so it can be shown offline.
7. Check the forecast for severe conditions and notify the user.