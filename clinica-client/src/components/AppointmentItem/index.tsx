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
      <S.GameContent>
        <S.ImageBox>
          <Image src={photo} alt={patient} layout='fill' objectFit='cover' />
        </S.ImageBox>

        <S.Content>
          <S.Title>{patient}</S.Title>
          <S.Group>
            <S.Price>{start}</S.Price>
          </S.Group>
        </S.Content>
      </S.GameContent>
    </S.Wrapper>
  )
}

export default AppointmentItem
