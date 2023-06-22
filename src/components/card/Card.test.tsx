import { Card } from './Card'
import { render } from '@testing-library/react'

describe('<Card />', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <p>Test Content</p>
      </Card>
    )

    const contentElement = getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })
})
