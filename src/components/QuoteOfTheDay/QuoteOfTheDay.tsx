import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function QuoteOfTheDay() {
  const { data, error, isLoading } = useSWR('/api/quote', fetcher, {
    revalidateOnFocus: false,  
    dedupingInterval: 3600000
  })

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading quote...</p>
  if (error || !data) return <p className="text-sm text-red-500">Failed to load quote.</p>

  return (
    <blockquote className="text-center space-y-2">
      <p className="text-xl font-medium leading-snug text-white">“{data.quote}”</p>
      <footer className="text-sm text-neutral-400">— {data.author}</footer>
    </blockquote>
  )
}

export default QuoteOfTheDay