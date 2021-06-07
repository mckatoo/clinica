import { TextareaHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type TextAreaFieldProps = {
  onTextAreaChange?: (value: string) => void
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaField = ({
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onTextAreaChange,
  ...props
}: TextAreaFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget
    const newValue = element.value
    element.style.height = '5px'
    element.style.width = '25px'
    element.style.height = `${element.scrollHeight}px`
    element.style.width = `${element.scrollHeight}px`
    setValue(newValue)

    !!onTextAreaChange && onTextAreaChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name!}>{label}</S.Label>}
      <S.TextAreaWrapper>
        <S.TextArea
          onChange={onChange}
          role='textbox'
          value={value}
          disabled={disabled}
          contentEditable={!disabled}
          name={name!}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.TextAreaWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextAreaField
