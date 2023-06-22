import { CardTab } from './CardTab'
import { render } from '@testing-library/react'

describe('<CardTab />', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CardTab value="test">
        <p>Test Content</p>
      </CardTab>
    )

    const contentElement = getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })

  it('aria-selected is true when selected is true', () => {
    const { getByRole } = render(
      <CardTab selected={true} value="test">
        Test Content
      </CardTab>
    )

    const tabElement = getByRole('tab')
    expect(tabElement).toHaveAttribute('aria-selected', 'true')
  })

  it('aria-selected is false when selected is false', () => {
    const { getByRole } = render(
      <CardTab selected={false} value="test">
        Test Content
      </CardTab>
    )

    const tabElement = getByRole('tab')
    expect(tabElement).toHaveAttribute('aria-selected', 'false')
  })

  it('calls onClick', () => {
    const onClick = vitest.fn()
    const { getByRole } = render(
      <CardTab selected={false} value="test" onClick={onClick}>
        Test Content
      </CardTab>
    )

    const tabElement = getByRole('tab')
    tabElement.click()
    expect(onClick).toHaveBeenCalled()
  })
})
