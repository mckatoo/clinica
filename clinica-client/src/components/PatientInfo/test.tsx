import userEvent from '@testing-library/user-event'
import 'session.mock'

import { render, screen } from 'utils/test-utils'

import PatientInfo from './'

const props = {
  id: '1',
  name: 'Patient Name',
  address: 'Patient Address, 32',
  phone: '19 98877 5566',
  photo: 'photo.jpg',
  cpf: '234.456.123-89',
  rg: '54.234.456-4',
  birth_date: '12/05/1998'
}

describe('<PatientInfo />', () => {
  it('should render patient informations', () => {
    const { container } = render(<PatientInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /patient name/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/nome/i)).toHaveValue('Patient Name')
    expect(screen.getByLabelText(/Endereço/i)).toHaveValue(
      'Patient Address, 32'
    )
    expect(screen.getByLabelText(/Telefones/i)).toHaveValue('19 98877 5566')
    expect(screen.getByLabelText(/cpf/i)).toHaveValue('234.456.123-89')
    expect(screen.getByLabelText(/rg/i)).toHaveValue('54.234.456-4')
    expect(screen.getByLabelText(/Data de nascimento/i)).toHaveValue(
      '12/05/1998'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<PatientInfo {...props} />)

    expect(screen.getByRole('button', { name: /editar/i })).toBeInTheDocument()
  })

  it('should call method when button clicked', () => {
    render(<PatientInfo {...props} />)

    const button = screen.getByRole('button', { name: /editar/i })

    expect(button).toBeInTheDocument()

    userEvent.click(button)

    expect(screen.getByRole('button', { name: /salvar/i }))
  })
})
