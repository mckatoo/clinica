import 'session.mock'

import { render, screen } from 'utils/test-utils'

import PatientCard from './'

const props = {
  id: '1',
  slug: '29032543890',
  name: 'Milton Carlos Katoo',
  phone: '19-99906-5094',
  address: 'Rua Dr Miguel Couto, 81 /nVila Boa Esperança /nItapira',
  cpf: '38457638908',
  rg: '2099879087',
  birth_date: '12/12/1969',
  photo: 'https://source.unsplash.com/user/willianjusten/354x472'
}

describe('<PatientCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<PatientCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.name })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.phone })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.name })).toHaveAttribute(
      'src',
      props.photo
    )

    expect(screen.getByRole('link', { name: props.name })).toHaveAttribute(
      'href',
      `/patient/${props.slug}`
    )

    expect(screen.getByLabelText(/Add to Attending/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render Ribbon', () => {
    render(
      <PatientCard
        {...props}
        ribbon='My Ribbon'
        ribbonColor='secondary'
        ribbonSize='small'
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#F98A05' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
