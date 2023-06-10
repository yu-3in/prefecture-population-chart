import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const { prefCode } = req.query
  const response = await axios.get('population/composition/perYear', {
    params: {
      prefCode,
      cityCode: '-', // すべての市区町村を選択する
    },
    baseURL: process.env.RESAS_BASE_URL,
    headers: { 'X-API-KEY': process.env.RESAS_API_KEY },
  })
  // Vercel Edge Networkでレスポンスでキャッシュ（86400: 1日）
  res.setHeader('Cache-Control', 's-maxage=86400')
  res.json(response.data)
}

export default handler
