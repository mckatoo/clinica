import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLoading, FormWrapper, FormError } from 'components/Form'
import TextField from 'components/TextField'
// import { signIn } from 'next-auth/client'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useState } from 'react'
// import { FieldErrors, signInValidate } from 'utils/validations'
import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  // const [fieldError, setFieldError] = useState<FieldErrors>({})
  // const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  // const routes = useRouter()
  // const { push, query } = routes

  // const handleInput = (field: string, value: string) => {
  //   setValues((s) => ({ ...s, [field]: value }))
  // }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // const errors = signInValidate(values)

    // if (Object.keys(errors).length) {
    //   setFieldError(errors)
    //   setLoading(false)
    //   return
    // }

    // setFieldError({})

    // const result = await signIn('credentials', {
    //   ...values,
    //   redirect: false
    //   callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    // })

    // if (result?.url) {
    //   return push(result?.url)
    // }

    setLoading(false)

    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="text"
          // error={fieldError?.email}
          // onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          // error={fieldError?.password}
          // onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
