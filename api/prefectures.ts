import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const handler = async (_: VercelRequest, res: VercelResponse) => {
  const response = await axios.get('prefectures', {
    baseURL: process.env.RESAS_BASE_URL,
    headers: { 'X-API-KEY': process.env.RESAS_API_KEY },
  })
  // Vercel Edge Networkでレスポンスでキャッシュ（86400: 1日）
  res.setHeader('Cache-Control', 's-maxage=86400')
  res.json(response.data)
}

export default handler
