
import { render, screen } from 'utils/test-utils';

import { CalendarPlus } from '@styled-icons/boxicons-regular';

import Button from './';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>To Schedule</Button>)

    expect(screen.getByRole('button', { name: /To Schedule/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">To Schedule</Button>)

    expect(screen.getByRole('button', { name: /To Schedule/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">To Schedule</Button>)

    expect(screen.getByRole('button', { name: /To Schedule/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>To Schedule</Button>)

    expect(screen.getByRole('button', { name: /To Schedule/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<CalendarPlus data-testid="icon" />}>To Schedule</Button>
    )

    expect(screen.getByText(/to schedule/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<CalendarPlus data-testid="icon" />} minimal>
        To Schedule
      </Button>
    )

    expect(screen.getByRole('button', { name: /to schedule/i })).toHaveStyle({
      background: 'none',
      color: '#ED3237'
    })

    expect(screen.getByRole('button', { name: /to schedule/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>To Schedule</Button>)

    expect(screen.getByRole('button', { name: /to schedule/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        To Schedule
      </Button>
    )

    expect(screen.getByRole('link', { name: /to schedule/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
