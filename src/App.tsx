import { Provider } from 'react-redux'
import { store } from './stores/store'
import { theme } from './theme'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>Hello world</ThemeProvider>
    </Provider>
  )
}

export default App
