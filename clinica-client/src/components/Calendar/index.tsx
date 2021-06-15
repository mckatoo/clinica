import { useState } from 'react'
import {default as ReactCalendar } from 'react-calendar'

import mock from './mock'
import * as S from './styles'

export type Appointment = {
  id: string
  photo: string
  dayOfWeek: string
  dayOfMonth: number
  start: string
  ending: string
  patient: string
  attendant: string
  title: string
}

export type CalendarProps = {
  appointmentList: Appointment[]
}

const Calendar = ({ appointmentList: mock }: CalendarProps) => {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  const [date, setDate] = useState(new Date())

  return (
    <S.Wrapper>
      <ReactCalendar onChange={setDate} value={date} />
      <S.CalendarFooter>
        <a href='#'>+</a>
      </S.CalendarFooter>
    </S.Wrapper>
  )
}
export default Calendar
