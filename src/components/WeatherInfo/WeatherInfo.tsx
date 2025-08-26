'use client'

import useGeoLocation from '@/hooks/useGeoLocation'
import useWeather from '@/hooks/useWeather'

function WeatherInfo() {
  const { lat, lon, isLoading: loadingGeo, isError: errorGeo } = useGeoLocation()
  const { weather, isLoading, isError } = useWeather(lat, lon)

  if (loadingGeo || isLoading) {
    return <p className="text-sm text-muted-foreground">Loading weather...</p>
  }

  if (errorGeo || isError || !weather) {
    return <p className="text-sm text-red-500">Failed to load weather data.</p>
  }

  const condition = weather.condition.toLowerCase()
  
  // Default gradient
  let gradient = 'from-blue-500/20'

  if (condition.includes('rain')) {
    gradient = 'from-sky-500/30'
  } else if (condition.includes('clear')) {
    gradient = 'from-yellow-400/30'
  } else if (condition.includes('cloud')) {
    gradient = 'from-gray-500/20'
  } else if (condition.includes('snow')) {
    gradient = 'from-white/20'
  } else if (condition.includes('storm')) {
    gradient = 'from-indigo-600/30'
  } else if (condition.includes('mist') || condition.includes('fog')) {
    gradient = 'from-slate-400/20'
  }

  return (
    <div
      className={`bg-gradient-to-br ${gradient} via-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white space-y-4 shadow-lg transition-all duration-300`}
    >
      <div className="text-center text-2xl font-bold">{weather.condition}</div>

      <div className="flex items-center justify-center space-x-4">
        <div className="text-5xl">{weather.icon}</div>
        <div className="text-4xl font-bold">{weather.temperature}°C</div>
      </div>
    </div>
  )
}

export default WeatherInfo
