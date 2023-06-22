import { CardTab } from './CardTab'
import { CardTabs } from './CardTabs'
import { render, screen } from '@testing-library/react'

describe('<CardTabs />', () => {
  it('renders children correctly', () => {
    render(
      <CardTabs>
        <CardTab value="Test Content">Test Content</CardTab>
      </CardTabs>
    )

    const contentElement = screen.getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })

  it('calls onChange', () => {
    const onChange = vitest.fn()
    render(
      <CardTabs onChange={onChange}>
        <CardTab value="Test Content">Test Content</CardTab>
      </CardTabs>
    )

    const tabElement = screen.getByRole('tab')
    tabElement.click()
    expect(onChange).toHaveBeenCalled()
  })
})
