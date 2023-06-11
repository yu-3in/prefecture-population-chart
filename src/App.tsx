import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

const App = () => {
  return <ThemeProvider theme={theme}>Hello world</ThemeProvider>
}

export default App
