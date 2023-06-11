import { Provider } from 'react-redux'
import { store } from './stores/store'
import { theme } from './theme'
import { ThemeProvider } from '@emotion/react'
import { PrefectureSelector } from './features/prefectures/components/PrefectureSelector'
import { PopulationLineChart } from './features/populations/components/PopulationLineChart'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PrefectureSelector />
        <PopulationLineChart />
      </ThemeProvider>
    </Provider>
  )
}

export default App
