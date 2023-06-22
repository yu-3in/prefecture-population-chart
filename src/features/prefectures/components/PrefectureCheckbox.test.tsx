import { Provider } from 'react-redux'
import { PrefectureCheckbox } from './PrefectureCheckbox'
import { render, fireEvent } from '@testing-library/react'
import { store } from '@/stores/store'

describe('<PrefectureCheckbox />', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <PrefectureCheckbox prefecture={{ prefCode: 13, prefName: '東京都', isSelected: false }} />
      </Provider>
    )

    const contentElement = getByText('東京都')
    expect(contentElement).toBeInTheDocument()
  })

  it('renders checkbox correctly when isSelected is false', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <PrefectureCheckbox prefecture={{ prefCode: 13, prefName: '東京都', isSelected: false }} />
      </Provider>
    )

    const checkboxElement = getByRole('checkbox') as HTMLInputElement
    expect(checkboxElement.checked).toBe(false)
  })

  it('renders checkbox correctly when isSelected is true', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <PrefectureCheckbox prefecture={{ prefCode: 13, prefName: '東京都', isSelected: true }} />
      </Provider>
    )

    const checkboxElement = getByRole('checkbox') as HTMLInputElement
    expect(checkboxElement.checked).toBe(true)
  })

  it('changes isSelected to true when clicked and isSelected is false', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <PrefectureCheckbox prefecture={{ prefCode: 13, prefName: '東京都', isSelected: false }} />
      </Provider>
    )

    const checkboxElement = getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkboxElement)
    expect(checkboxElement.checked).toBe(false)
  })
})
