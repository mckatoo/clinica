import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = render(<Logo id="myId" />)

    expect(container.querySelector('#paint_myId')).toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    render(<Logo />)
    expect(
      screen.getByLabelText(/Uniesi - Centro de Universitário de Itapira/i)
        .parentElement
    ).toHaveStyle({
      color: '#EBFFFD'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)
    expect(
      screen.getByLabelText(/Uniesi - Centro de Universitário de Itapira/i)
        .parentElement
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(
      screen.getByLabelText(/Uniesi - Centro de Universitário de Itapira/i)
        .parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(
      screen.getByLabelText(/Uniesi - Centro de Universitário de Itapira/i)
        .parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    const logo = screen.getByLabelText(
      /Uniesi - Centro de Universitário de Itapira/i
    )
    expect(logo.parentElement).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
    expect(logo.firstChild).toHaveClass('text')
  })
})
