import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useWeather(lat?: number, lon?: number) {
  const shouldFetch = lat !== undefined && lon !== undefined

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/weather?lat=${lat}&lon=${lon}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000 
    }
  )

  return {
    weather: data,
    isLoading,
    isError: error
  }
}
