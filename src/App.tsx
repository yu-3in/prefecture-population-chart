import { useEffect } from 'react'
import client from './libs/client'

const App = () => {
  useEffect(() => {
    ;(async () => {
      const prefectures = await client.get('prefectures')
      console.log(prefectures)
    })()
  }, [])
  return <>Hello World</>
}

export default App
