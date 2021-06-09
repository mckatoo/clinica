import { Edit } from '@styled-icons/material-outlined'
import AttendingButton from 'components/AttendingButton'
import Button from 'components/Button'
import Heading from 'components/Heading'
import TextAreaField from 'components/TextAreaField'
import TextField from 'components/TextField'
import Image from 'next/image'
import { useState } from 'react'

import * as S from './styles'

export type PatientInfoProps = {
  id: string
  name: string
  address: string
  phone: string
  photo?: string
  cpf?: string
  rg?: string
  birth_date?: string
}

const PatientInfo = ({
  id,
  name,
  address,
  phone,
  photo,
  cpf,
  rg,
  birth_date
}: PatientInfoProps) => {
  const [edit, setEdit] = useState(false)
  const [buttonLabel, setButtonLabel] = useState('Editar');
  const handleButton = () => {
    setEdit(!edit)
    !edit ? setButtonLabel('Salvar') : setButtonLabel('Editar')
  }
  return (
    <S.Wrapper>
      <Heading color='black' lineBottom>
        {name}
      </Heading>

      <TextField label='Nome' name='name' disabled={!edit} initialValue={name} />
      <TextAreaField
        label='Endereço'
        name='address'
        disabled={!edit}
        initialValue={address}
      />
      <TextField label='Telefones' name='phone' disabled={!edit} initialValue={phone} />
      <TextField label='CPF' name='cpf' disabled={!edit} initialValue={cpf!} />
      <TextField label='RG' name='rg' disabled={!edit} initialValue={rg!} />
      <TextField
        label='Data de nascimento'
        name='birth_date'
        disabled={!edit}
        initialValue={birth_date || ''}
      />
      {!!photo && (
        <S.Photo>
          <Image
            src={photo}
            alt={name}
            height={151}
            width={113}
            layout='responsive'
          />
        </S.Photo>
      )}

      <S.ButtonsWrapper>
        <Button size='medium' icon={<Edit />} onClick={handleButton}>
          {buttonLabel}
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
export default PatientInfo
