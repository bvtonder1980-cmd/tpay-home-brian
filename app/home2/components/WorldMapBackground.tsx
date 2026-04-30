'use client';

import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Cape Town coordinates
const CAPE_TOWN: [number, number] = [18.4241, -33.9249];

// Destination cities with coordinates
const destinations: { name: string; coordinates: [number, number]; delay: number }[] = [
  // Africa
  { name: 'Johannesburg', coordinates: [28.0473, -26.2041], delay: 0 },
  { name: 'Nairobi', coordinates: [36.8219, -1.2921], delay: 0.5 },
  { name: 'Lagos', coordinates: [3.3792, 6.5244], delay: 1 },
  { name: 'Cairo', coordinates: [31.2357, 30.0444], delay: 1.5 },
  { name: 'Casablanca', coordinates: [-7.5898, 33.5731], delay: 2 },
  // Europe
  { name: 'London', coordinates: [-0.1276, 51.5074], delay: 2.5 },
  { name: 'Paris', coordinates: [2.3522, 48.8566], delay: 3 },
  { name: 'Amsterdam', coordinates: [4.9041, 52.3676], delay: 3.5 },
  { name: 'Frankfurt', coordinates: [8.6821, 50.1109], delay: 4 },
  // Middle East
  { name: 'Dubai', coordinates: [55.2708, 25.2048], delay: 4.5 },
  { name: 'Abu Dhabi', coordinates: [54.3773, 24.4539], delay: 5 },
  // Asia
  { name: 'Mumbai', coordinates: [72.8777, 19.0760], delay: 5.5 },
  { name: 'Singapore', coordinates: [103.8198, 1.3521], delay: 6 },
  { name: 'Hong Kong', coordinates: [114.1694, 22.3193], delay: 6.5 },
  { name: 'Tokyo', coordinates: [139.6917, 35.6895], delay: 7 },
  // Americas
  { name: 'New York', coordinates: [-74.0060, 40.7128], delay: 7.5 },
  { name: 'São Paulo', coordinates: [-46.6333, -23.5505], delay: 8 },
  // Oceania
  { name: 'Sydney', coordinates: [151.2093, -33.8688], delay: 8.5 },
];

export default function WorldMapBackground() {
  return (
    <div className="world-map-background">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
          center: [20, 5],
        }}
        width={800}
        height={500}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isSouthAfrica = geo.properties.name === 'South Africa';
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isSouthAfrica ? '#E07A5F' : '#1a3a5c'}
                  stroke="#2d4a6f"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Animated connection lines */}
        {destinations.map((dest) => (
          <Line
            key={dest.name}
            from={CAPE_TOWN}
            to={dest.coordinates}
            stroke="#4A90D9"
            strokeWidth={1.5}
            strokeLinecap="round"
            className={`connection-line connection-line-${destinations.indexOf(dest)}`}
            style={{
              animationDelay: `${dest.delay}s`,
            }}
          />
        ))}

        {/* Cape Town marker */}
        <Marker coordinates={CAPE_TOWN}>
          <circle r={6} fill="#E07A5F" stroke="#fff" strokeWidth={2} className="pulse-marker" />
          <circle r={10} fill="transparent" stroke="#E07A5F" strokeWidth={1} className="pulse-ring" />
        </Marker>

        {/* Destination markers */}
        {destinations.map((dest) => (
          <Marker key={dest.name} coordinates={dest.coordinates}>
            <circle r={3} fill="#4A90D9" stroke="#fff" strokeWidth={1} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
