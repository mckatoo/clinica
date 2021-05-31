/* eslint-disable @typescript-eslint/no-unused-vars */

// import { AttendingContextDefaultValues } from 'hooks/use-attending'
import { render, screen } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

import AttendingButton from './'

describe('AttendingButton', () => {
  it('should render a AttendingButton with id=1', () => {
    render(<AttendingButton id="1" />)

    const button = screen.getByLabelText(/add to attending/i)
    expect(button).toBeInTheDocument()
  })

  // it('should render button to add and call method if clicked', () => {
  //   const attendingProviderProps = {
  //     ...AttendingContextDefaultValues,
  //     isInAttending: () => false,
  //     addToAttending: jest.fn()
  //   }
  //   render(<AttendingButton id="1" />, { attendingProviderProps })
  //   const button = screen.getByLabelText(/add to attending/i)
  //   expect(button).toBeInTheDocument()
  //   userEvent.click(button)
  //   expect(attendingProviderProps.addToAttending).toHaveBeenCalledWith('1')
  // })

  // it('should render button to remove and call method if clicked', () => {
  //   const attendingProviderProps = {
  //     ...AttendingContextDefaultValues,
  //     isInAttending: () => true,
  //     removeFromAttending: jest.fn()
  //   }
  //   render(<AttendingButton id="1" />, { attendingProviderProps })
  //   const button = screen.getByLabelText(/remove from attending/i)
  //   expect(button).toBeInTheDocument()
  //   userEvent.click(button)
  //   expect(attendingProviderProps.removeFromAttending).toHaveBeenCalledWith('1')
  // })
})
