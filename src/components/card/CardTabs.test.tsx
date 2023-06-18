import { CardTabs } from './CardTabs'
import { render, screen } from '@testing-library/react'

describe('<CardTabs />', () => {
  it('renders children correctly', () => {
    render(
      <CardTabs>
        <p>Test Content</p>
      </CardTabs>
    )

    const contentElement = screen.getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })

  it('calls onChange', () => {
    const onChange = vitest.fn()
    render(
      <CardTabs onChange={onChange}>
        <p>Test Content</p>
      </CardTabs>
    )

    const tabElement = screen.getByRole('tab')
    tabElement.click()
    expect(onChange).toHaveBeenCalled()
  })
})
