import {
  ComposableMap, Geographies, Geography, Marker, Line,
} from 'react-simple-maps'
import { EllipsisVertical, Medal } from 'lucide-react'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Coordinates hamesha [longitude, latitude] order mein hote hain
const places = {
  usa: [-105, 39],
  chile: [-70, -35],
  uk: [-2, 54],
  europe: [12, 48],
  southAfrica: [24, -29],
  middleEast: [45, 26],
  india: [78, 22],
  seAsia: [105, 14],
  japan: [138, 36],
  australia: [135, -25],
}

const markers = Object.values(places)

const routes = [
  [places.usa, places.uk],
  [places.europe, places.japan],
  [places.chile, places.southAfrica],
  [places.middleEast, places.australia],
]

const countries = [
  { name: 'United States', revenue: '$48.6k', ring: 'border-cyan-400' },
  { name: 'United Kingdom', revenue: '$26.4k', ring: 'border-blue-500' },
  { name: 'Australia', revenue: '$18.9k', ring: 'border-purple-400' },
]

const RevenueByLocations = () => {
  return (
    <div className="bg-backCol rounded-lg text-gray-300 w-full lg:w-[48%] xl:w-[29%]">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-dashed border-gray-700">
        <p className="font-medium">Revenue By Locations</p>
        <button className="border border-gray-600 rounded p-1.5">
          <EllipsisVertical size={16} />
        </button>
      </div>

      <div className="px-6 py-4">
        {/* Map */}
        <ComposableMap
          width={800}
          height={450}
          projection="geoMercator"
          projectionConfig={{ scale: 120, center: [10, 25] }}
          style={{ width: '100%', height: 'auto' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#3a3d4a"
                  stroke="#252630"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#4a4d5c' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Dashed connecting lines */}
          {routes.map(([from, to], i) => (
            <Line
              key={i}
              from={from}
              to={to}
              stroke="#8b8fa3"
              strokeWidth={1}
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          ))}

          {/* Markers: bahar halka ring + andar purple dot */}
          {markers.map((coords, i) => (
            <Marker key={i} coordinates={coords}>
              <circle r={11} fill="#7b70ef" fillOpacity={0.35} />
              <circle r={6} fill="#7b70ef" stroke="#c9c4ff" strokeWidth={1.5} />
            </Marker>
          ))}
        </ComposableMap>

        {/* Congratulations banner */}
        <div className="flex items-center justify-between border border-dashed border-gray-700 rounded-lg p-3 mt-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/15 flex items-center justify-center">
              <Medal className="text-yellow-500" size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-200">Congratulations !...</p>
              <p className="text-sm text-gray-500">You've just hit a new record..</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-200">25.9k</p>
            <p className="text-xs text-gray-500">ORDERS</p>
          </div>
        </div>

        {/* Countries list */}
        <div className="flex flex-col gap-3 mt-5">
          {countries.map((c) => (
            <div key={c.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-3.5 h-3.5 rounded-full border-2 ${c.ring}`}></span>
                <span className="text-gray-300">{c.name}</span>
              </div>
              <p>
                <span className="font-semibold text-gray-200">{c.revenue}</span>{' '}
                <span className="text-gray-500">Revenue</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RevenueByLocations