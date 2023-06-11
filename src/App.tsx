import { Provider } from 'react-redux'
import { store } from './stores/store'
import { theme } from './theme'
import { ThemeProvider, css } from '@emotion/react'
import { PrefectureSelector } from './features/prefectures/components/PrefectureSelector'
import { PopulationLineChart } from './features/populations/components/PopulationLineChart'
import { Container } from './components/layouts/Container'
import { Card } from './components/card'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main css={main}>
          <Container>
            <div css={content}>
              <Card>
                <Card.Head>都道府県を選択してください</Card.Head>
                <Card.Content>
                  <PrefectureSelector />
                </Card.Content>
              </Card>
              <Card>
                <PopulationLineChart />
              </Card>
            </div>
          </Container>
        </main>
      </ThemeProvider>
    </Provider>
  )
}

const main = css`
  background-color: ${theme.colors.background};
  min-height: 100vh;
  padding: 2rem 0;
`

const content = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default App
