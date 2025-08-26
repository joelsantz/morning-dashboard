import React from 'react'
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import QuoteOfTheDay from '../QuoteOfTheDay/QuoteOfTheDay';

function Dashboard() {
  return (
    <div className="bg-black border border-white rounded-2xl shadow-2xl p-10 max-w-xl w-full space-y-10 text-white">
      <h1 className="text-3xl font-bold text-center tracking-tight">
        🌤️ Morning Dashboard
      </h1>

      <WeatherInfo />
      <QuoteOfTheDay />

      <footer className="pt-4 border-t border-white/10 text-center text-xs text-white/50">
        Made by Felipe Santana - 2025
      </footer>
    </div>
  )
}

export default Dashboard;