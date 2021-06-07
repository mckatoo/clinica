import AttendingButton from 'components/AttendingButton'
import Heading from 'components/Heading'
import TextAreaField from 'components/TextAreaField'
import TextField from 'components/TextField'

import * as S from './styles'

export type PatientInfoProps = {
  id: string
  name: string
  address: string
  phone: string
  photo: string
  cpf?: string
  rg?: string
  birth_date?: string
}

const PatientInfo = ({ id, name, address, phone, photo, cpf, rg, birth_date }: PatientInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {name}
    </Heading>

    <TextField label='Nome' disabled initialValue={name} />
    <TextAreaField label='Endereço' disabled initialValue={address} />

    <S.ButtonsWrapper>
      <AttendingButton id={id} size="large" hasText />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default PatientInfo
