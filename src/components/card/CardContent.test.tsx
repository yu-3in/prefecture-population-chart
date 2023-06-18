import { CardContent } from './CardContent'
import { render } from '@testing-library/react'

describe('<CardContent />', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CardContent>
        <p>Test Content</p>
      </CardContent>
    )

    const contentElement = getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })
})
