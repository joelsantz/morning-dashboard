import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useQuote() {
  const { data, error, isLoading } = useSWR('/api/quote', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 3600000
  })

  return {
    quote: data?.quote,
    author: data?.author,
    isLoading,
    isError: error
  }
}
