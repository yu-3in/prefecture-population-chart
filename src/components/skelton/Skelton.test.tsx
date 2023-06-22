// wirte Skelton.test.tsx like this: Card.test.tsx
import { Skelton } from './Skelton'
import { render } from '@testing-library/react'

describe('<Skelton />', () => {
  // widthとheightが指定できるかどうか
  it('renders width and height correctly', () => {
    const { container } = render(<Skelton width="100px" height="100px" />)

    const skeltonElement = container.firstChild
    expect(skeltonElement).toHaveStyle('width: 100px')
    expect(skeltonElement).toHaveStyle('height: 100px')
  })
})
