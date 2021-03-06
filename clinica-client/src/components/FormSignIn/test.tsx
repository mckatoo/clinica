// import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const useRouter = jest.spyOn(require('next/router'), 'useRouter')
// const push = jest.fn()

// useRouter.mockImplementation(() => ({
//   push,
//   query: '',
//   asPath: '',
//   route: '/'
// }))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(
      // <MockedProvider>
      <FormSignIn />
      // </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(
      // <MockedProvider>
      <FormSignIn />
      // </MockedProvider>
    )

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })
})
