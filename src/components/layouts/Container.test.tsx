import { Container } from './Container'
import { render } from '@testing-library/react'

describe('<Container />', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <p>Test Content</p>
      </Container>
    )

    const contentElement = getByText('Test Content')
    expect(contentElement).toBeInTheDocument()
  })
})
