import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useGeoLocation() {
  const { data, error, isLoading } = useSWR('/api/geo', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000
  })

  return {
    city: data?.city,
    lat: data?.lat,
    lon: data?.lon,
    isLoading,
    isError: error
  }
}
