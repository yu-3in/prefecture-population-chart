import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const handler = async (_: VercelRequest, response: VercelResponse) => {
  const result = await axios.get('prefectures', {
    baseURL: process.env.RESAS_BASE_URL,
    headers: { 'X-API-KEY': process.env.RESAS_API_KEY },
  })
  const data = await result.data
  // Vercel Edge Networkでレスポンスでキャッシュ（86400: 1日）
  response.setHeader('Cache-Control', 's-maxage=86400')
  response.json(data)
}

export default handler
