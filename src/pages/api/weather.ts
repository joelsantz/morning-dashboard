import type { NextApiRequest, NextApiResponse } from 'next'

function getIcon(code: number) {
  if (code === 0) return { icon: '☀️', label: 'Clear' }
  if ([1, 2].includes(code)) return { icon: '⛅️', label: 'Partly cloudy' }
  if ([3, 45, 48].includes(code)) return { icon: '☁️', label: 'Cloudy' }
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return { icon: '🌧️', label: 'Rain' }
  if ([71, 73, 75, 85, 86].includes(code)) return { icon: '❄️', label: 'Snow' }
  if ([95, 96, 99].includes(code)) return { icon: '⛈️', label: 'Thunderstorm' }
  return { icon: '🌡️', label: 'Unknown' }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=300')

  const { lat, lon } = req.query

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Missing lat/lon parameters' })
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    const response = await fetch(url)
    const data = await response.json()
    const weather = data.current_weather

    const { icon, label } = getIcon(weather.weathercode)

    return res.status(200).json({
      temperature: weather.temperature,
      condition: label,
      icon
    })
  } catch (e) {
    return res.status(500).json({ error: 'Failed to fetch weather data' })
  }
}
