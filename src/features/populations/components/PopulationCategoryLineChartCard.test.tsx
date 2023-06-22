import { Provider } from 'react-redux'
import { PopulationCategoryLineChartCard } from './PopulationCategoryLineChartCard'
import { render, screen } from '@testing-library/react'
import { store } from '@/stores/store'

describe('<PopulationCategoryLineChartCard />', () => {
  it('renders tab correctly', () => {
    render(
      <Provider store={store}>
        <PopulationCategoryLineChartCard />
      </Provider>
    )

    const tabElement = screen.getByRole('tab', { name: '総人口' })
    const tabElement2 = screen.getByRole('tab', { name: '年少人口' })
    const tabElement3 = screen.getByRole('tab', { name: '生産年齢人口' })
    const tabElement4 = screen.getByRole('tab', { name: '老年人口' })

    expect(tabElement).toBeInTheDocument()
    expect(tabElement2).toBeInTheDocument()
    expect(tabElement3).toBeInTheDocument()
    expect(tabElement4).toBeInTheDocument()
  })
})
