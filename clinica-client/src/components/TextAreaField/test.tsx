import { render, screen, waitFor } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

import TextAreaField from './'

describe('<TextAreaField />', () => {
  it('Renders with Label', () => {
    render(<TextAreaField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    render(<TextAreaField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<TextAreaField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onTextAreaChange = jest.fn()
    render(
      <TextAreaField
        onTextAreaChange={onTextAreaChange}
        label="TextAreaField"
        name="TextAreaField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onTextAreaChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onTextAreaChange).toHaveBeenCalledWith(text)
  })

  it('Does not changes its value when disabled', async () => {
    const onTextAreaChange = jest.fn()
    render(
      <TextAreaField
        onTextAreaChange={onTextAreaChange}
        label="TextAreaField"
        name="TextAreaField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onTextAreaChange).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    const { container } = render(
      <TextAreaField label="TextAreaField" error="Error message" />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    render(<TextAreaField label="TextAreaField" name="TextAreaField" />)

    const input = screen.getByLabelText('TextAreaField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    render(
      <TextAreaField label="TextAreaField" name="TextAreaField" disabled />
    )

    const input = screen.getByLabelText('TextAreaField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
