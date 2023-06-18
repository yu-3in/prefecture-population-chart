import { render } from '@testing-library/react'
import { PopulationLineChart } from './PopulationLineChart'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'

describe('<PopulationLineChart />', () => {
  it('renders population ratio graph correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <PopulationLineChart category="総人口" />
      </Provider>
    )

    const populationRatioGraphElement = container.firstChild

    expect(populationRatioGraphElement).toBeInTheDocument()
  })
})
