'use client'

import WeatherInfo from '@/components/WeatherInfo/WeatherInfo'
import useGeoLocation from '@/hooks/useGeoLocation'
import QuoteOfTheDay from '../QuoteOfTheDay/QuoteOfTheDay'

export default function Dashboard() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })

  const { city } = useGeoLocation()

  return (
      <div className="w-full max-w-md space-y-8 bg-white/2 backdrop-blur rounded-2xl border border-white/15 shadow-xl px-8 py-10">
        <h1 className="text-center text-lg text-white/80 font-medium">
          Hello, today is <span className="font-semibold text-white">{formattedDate}</span>
        </h1>

        <p className="text-center text-base text-white/60">
          The weather in <span className="text-white font-bold">{city}</span> is:
        </p>

        <WeatherInfo />

        <p className="text-center text-base text-white/60 pt-6">
          Your inspirational quote for today is:
        </p>

        <QuoteOfTheDay />

        <footer className="text-center text-xs text-white/40 pt-10 border-t border-white/10">
          Made by Felipe Santana - 2025
        </footer>
      </div>
  )
}
