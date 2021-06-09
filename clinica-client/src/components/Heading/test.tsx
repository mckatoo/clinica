import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyle({
      color: '#EBFFFD'
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyle({
      'border-left': '0.7rem solid #ED3237'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    render(<Heading size="small">Uniesi</Heading>)
    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Uniesi</Heading>)

    expect(screen.getByRole('heading', { name: /uniesi/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #ED3237' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid', {
      modifier: '::after'
    })
    expect(heading).toHaveStyleRule(
      'border-image',
      'linear-gradient( to left,#07BEB8,#ED3237 ) 1 0',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F98A05' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid', {
      modifier: '::after'
    })
    expect(heading).toHaveStyleRule(
      'border-image',
      'linear-gradient( to left,#07BEB8,#F98A05 ) 1 0',
      {
        modifier: '::after'
      }
    )
  })
})
