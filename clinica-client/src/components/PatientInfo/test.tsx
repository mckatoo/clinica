import 'session.mock'

import { render, screen } from 'utils/test-utils'

import PatientInfo from './'

const props = {
  id: '1',
  name: 'Patient Name',
  address: 'Patient Address, 32',
  phone: '(19) 98877 5566',
  cpf: '234.456.123-89',
  rg: '54.234.456-4',
  birth_date: '12/05/1998',
}

describe('<PatientInfo />', () => {
  it('should render patient informations', () => {
    const { container } = render(<PatientInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /patient name/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Patient Address, 32')).toBeInTheDocument()
    expect(screen.getByText('(19) 98877 5566')).toBeInTheDocument()
    expect(screen.getByText('234.456.123-89')).toBeInTheDocument()
    expect(screen.getByText('54.234.456-4')).toBeInTheDocument()
    expect(screen.getByText('12/05/1998')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<PatientInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to attending/i })
    ).toBeInTheDocument()
  })
})
