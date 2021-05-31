import AttendingButton from 'components/AttendingButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export type PatientCardProps = {
  id: string
  name: string
  phone: string
  address: string
  cpf: string
  rg: string
  slug: string
  birth_date: string
  photo: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const PatientCard = ({
  id,
  name,
  phone,
  slug,
  photo,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: PatientCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/patient/${slug}`} passHref>
      <S.ImageBox>
        <Image src={photo} alt={name} layout="fill" objectFit="cover" />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/patient/${slug}`} passHref>
        <S.Info>
          <S.Title>{name}</S.Title>
          <S.Phone>{phone}</S.Phone>
        </S.Info>
      </Link>
      <S.BuyBox>
        <AttendingButton aria-label="Add to Attending List" id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default PatientCard
