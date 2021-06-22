// import { useCart } from 'hooks/use-cart'
import Image from 'next/image'

import * as S from './styles'

export type AppointmentItemProps = {
  id: string
  photo: string
  patient: string
  start: string
}

const AppointmentItem = ({
  id,
  photo,
  patient,
  start
}: AppointmentItemProps) => {
  // const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
        <S.ImageBox>
          <Image src={photo} alt={patient} layout='fill' objectFit='cover' />
        </S.ImageBox>
        <S.Content>
          <S.Name>{patient}</S.Name>
        </S.Content>

        <S.Group>
          <S.Hour>{start}</S.Hour>
        </S.Group>
    </S.Wrapper>
  )
}

export default AppointmentItem
