import AppointmentItem from 'components/AppointmentItem'
import mock from 'components/Calendar/mock'
import Empty from 'components/Empty'

import * as S from './styles'

export type AppointmentListProps = {
  hasButton?: boolean
}

type AppointmentItem = {
  id: string
  photo: string
  start: string
  patient: string
}

const AppointmentList = ({ hasButton = false }: AppointmentListProps) => {
  // const { items, total, loading } = useCart()
  const items: AppointmentItem[] = mock

  // if (loading) {
  //   return (
  //     <S.Loading>
  //       <Loader />
  //     </S.Loading>
  //   )
  // }

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          <S.GamesList>
            {items.map(item => (
              <AppointmentItem key={item.patient} {...item} />
            ))}
          </S.GamesList>
        </>
      ) : (
        <Empty
          title='Your appointment list is empty'
          description='Go back to the home.'
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default AppointmentList
