import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=3600')

  try {
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()

    res.status(200).json({
      quote: data.quote,
      author: data.author
    })
  } catch (e: Error | unknown) {
    res.status(500).json({ error: 'Failed to fetch quote' })
  }
}
