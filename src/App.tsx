import { Provider } from 'react-redux'
import { PrefectureSelector } from './features/prefectures/components/PrefectureSelector'
import { store } from './stores/store'
import { theme } from './theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>Hello world</ThemeProvider>
    </Provider>
  )
}

export default App
