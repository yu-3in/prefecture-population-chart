import { CardHead } from './CardHead'
import { render } from '@testing-library/react'

describe('<CardHead />', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CardHead>
        <p>Test Content</p>
      </CardHead>
    )

    const contentElement = getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })
})
