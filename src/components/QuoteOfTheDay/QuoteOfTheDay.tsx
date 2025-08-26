'use client'

import useQuote from '@/hooks/useQuote'

function QuoteOfTheDay() {
  const { quote, author, isLoading, isError } = useQuote()

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading quote...</p>
  if (isError || !quote) return <p className="text-sm text-red-500">Failed to load quote.</p>

  return (
    <div className="bg-gradient-to-br from-neutral-800/40 via-black/20 to-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white space-y-2 shadow-lg transition-all duration-300">
      <blockquote className="text-center space-y-2">
        <p className="text-xl font-medium leading-snug">“{quote}”</p>
        <footer className="text-sm text-neutral-400">— {author}</footer>
      </blockquote>
    </div>
  )
}

export default QuoteOfTheDay
