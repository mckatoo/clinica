import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Appointments from '.'

describe('<Appointments />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Appointments />)

    expect(screen.getByRole('heading', { name: /Appointments/i })).toBeInTheDocument()
  })
})
