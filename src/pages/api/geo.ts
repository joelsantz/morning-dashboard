import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=300') 


  const city = req.headers['x-vercel-ip-city']
  const lat = req.headers['x-vercel-ip-latitude']
  const lon = req.headers['x-vercel-ip-longitude']

  if (city && lat && lon) {
    return res.status(200).json({
      city,
      lat: Number(lat),
      lon: Number(lon),
      source: 'vercel-geo'
    })
  }

  try {
    const geoRes = await fetch('http://ip-api.com/json/')
    const data = await geoRes.json()

    return res.status(200).json({
      city: data.city,
      lat: data.lat,
      lon: data.lon,
      source: 'ip-api'
    })
  } catch {
    return res.status(500).json({
      error: 'Unable to determine location'
    })
  }
}
