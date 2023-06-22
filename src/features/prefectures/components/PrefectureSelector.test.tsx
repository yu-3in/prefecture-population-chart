import { render, screen } from '@testing-library/react'
import { PrefectureSelector } from './PrefectureSelector'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'

describe('<PrefectureSelector />', () => {
  it('renders children correctly', () => {
    render(
      <Provider store={store}>
        <PrefectureSelector />
      </Provider>
    )

    const divElement = screen.getByRole('list')
    expect(divElement).toBeInTheDocument()
  })
})
