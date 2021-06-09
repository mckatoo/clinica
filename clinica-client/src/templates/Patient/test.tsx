import patientInfoMock from 'components/PatientInfo/mock'
import { render, screen } from 'utils/test-utils'

import Patient, { PatientTemplateProps } from './'

const props: PatientTemplateProps = {
  patientInfo: patientInfoMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

// jest.mock('components/PatientInfo', () => ({
//   __esModule: true,
//   default: function Mock () {
//     return <div data-testid='Mock PatientInfo' />
//   }
// }))

describe('<Patient />', () => {
  it('should render the template with components', () => {
    render(<Patient {...props} />)
    // expect(screen.getByTestId('Mock PatientInfo')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /milton carlos katoo/i })
    ).toBeInTheDocument()
  })
})
