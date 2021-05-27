import Main from '.'
import { render, screen } from 'utils/test-utils'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /DevNaRoça/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container).toHaveStyle("backgroundColor: '#06092b'")
  })
})
