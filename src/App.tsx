import { Provider } from 'react-redux'
import { store } from './stores/store'
import { theme } from './theme'
import { ThemeProvider, css } from '@emotion/react'
import { PrefectureSelector } from './features/prefectures/components/PrefectureSelector'
import { PopulationLineChart } from './features/populations/components/PopulationLineChart'
import { Container } from './components/layouts/Container'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main css={main}>
          <Container>
            <PrefectureSelector />
            <PopulationLineChart />
          </Container>
        </main>
      </ThemeProvider>
    </Provider>
  )
}

const main = css`
  background-color: ${theme.colors.background};
  min-height: 100vh;
`

export default App
