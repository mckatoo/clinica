import { useEffect, useState } from 'react'

import { Plus, SkipNext, SkipPrevious } from '@styled-icons/boxicons-regular'

import * as S from './styles'

export type DateProps = {
  weekday: string
  date: string
  month: string
  year: string
  totalAppointments: number
}

export type CalendarProps = {
  month: DateProps[]
}

const Calendar = ({ month }: CalendarProps) => {
  const week = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.']

  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysOfMonth = fillMonth(selectedDate)
  const previewDays = fillPreviewDays(selectedDate)
  const nextDays = fillNextDays(selectedDate)

  function getTotalAppointmentsOfDay (date: Date): number {
    const _DATE = date.getDate().toString()
    const _MONTH = (date.getMonth() + 1).toString()
    const _YEAR = date.getFullYear().toString()

    const total =
      !!month &&
      month.find(
        d => d.date === _DATE && d.month === _MONTH && d.year === _YEAR
      )

    return total?.totalAppointments || 0
  }

  function fillPreviewDays (date?: Date): DateProps[] {
    const timestamp = !!date ? date.getTime() : new Date().getTime()
    const previewDays: DateProps[] = []
    const cursor = date || new Date()
    cursor.setDate(1)

    while (cursor.getDay() > 0) {
      cursor.setDate(cursor.getDate() - 1)
      previewDays.push({
        weekday: Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(
          cursor
        ),
        date: cursor.getDate().toString(),
        month: (cursor.getMonth() + 1).toString(),
        year: cursor.getFullYear().toString(),
        totalAppointments: getTotalAppointmentsOfDay(cursor)
      })
    }
    cursor.setTime(timestamp)

    return previewDays.reverse()
  }

  function fillNextDays (date?: Date): DateProps[] {
    const timestamp = !!date ? date.getTime() : new Date().getTime()
    const nextDays: DateProps[] = []
    const cursor = date || new Date()
    cursor.setMonth(cursor.getMonth() + 1)
    cursor.setDate(1)
    cursor.setDate(cursor.getDate() - 1)
    const nextMonth = cursor.getMonth() < 11 ? cursor.getMonth() + 1 : 0

    while (cursor.getDay() < 6) {
      cursor.setDate(cursor.getDate() + 1)
      if (cursor.getMonth() === nextMonth) {
        nextDays.push({
          weekday: Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(
            cursor
          ),
          date: cursor.getDate().toString(),
          month: (cursor.getMonth() + 1).toString(),
          year: cursor.getFullYear().toString(),
          totalAppointments: getTotalAppointmentsOfDay(cursor)
        })
      }
    }
    cursor.setTime(timestamp)

    return nextDays
  }

  function fillMonth (date?: Date): DateProps[] {
    const timestamp = !!date ? date.getTime() : new Date().getTime()
    const calendarMonth: DateProps[] = []
    const cursor = date || new Date()
    const this_month = cursor.getMonth()
    cursor.setDate(1)

    while (cursor.getMonth() === this_month) {
      calendarMonth.push({
        weekday: Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(
          cursor
        ),
        date: cursor.getDate().toString(),
        month: (cursor.getMonth() + 1).toString(),
        year: cursor.getFullYear().toString(),
        totalAppointments: getTotalAppointmentsOfDay(cursor)
      })
      cursor.setDate(cursor.getDate() + 1)
    }
    cursor.setTime(timestamp)

    return calendarMonth
  }

  function handlePrev () {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() - 1,
        selectedDate.getDate()
      )
    )
  }

  function handleNext () {
    setSelectedDate(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        selectedDate.getDate()
      )
    )
  }

  function isNow (d: Pick<DateProps, 'date' | 'month' | 'year'>): Boolean {
    return (
      Intl.DateTimeFormat('pt-BR').format(new Date()) ===
      Intl.DateTimeFormat('pt-BR').format(
        new Date(`${d.year}/${d.month}/${d.date}`)
      )
    )
  }

  async function handleSelectedDate (date: DateProps) {
    setSelectedDate(new Date(`${date.year} ${date.month} ${date.date}`))
  }

  useEffect(() => {
    fillMonth(selectedDate)
    fillPreviewDays(selectedDate)
    fillNextDays(selectedDate)
  }, [selectedDate])

  return (
    <S.Wrapper>
      <S.Month>
        <button onClick={handlePrev}>
          <SkipPrevious size={24} />
        </button>
        <h3>
          {Intl.DateTimeFormat('pt-BR', { month: 'long' })
            .format(selectedDate)
            .toUpperCase()}{' '}
          de {selectedDate.getFullYear()}
        </h3>
        <button onClick={handleNext}>
          <SkipNext size={24} />
        </button>
      </S.Month>
      <S.Body>
        <S.Week>
          {week.map(w => (
            <li key={w}>{w}</li>
          ))}
        </S.Week>
        <S.Dates>
          {previewDays.map(d => (
            <S.Item
              key={d.date}
              prevOrNext
              total={d.totalAppointments}
              onClick={() =>
                setSelectedDate(new Date(`${d.year} ${d.month} ${d.date}`))
              }
            >
              {d.date}
              {!!(d.totalAppointments > 0) && (
                <span>{d.totalAppointments}</span>
              )}
            </S.Item>
          ))}
          {daysOfMonth.map(d => (
            <S.Item
              key={d.date}
              now={!!isNow(d)}
              total={d.totalAppointments}
              onClick={() =>
                setSelectedDate(new Date(`${d.year} ${d.month} ${d.date}`))
              }
            >
              {d.date}
              {!!(d.totalAppointments > 0) && (
                <span>{d.totalAppointments}</span>
              )}
            </S.Item>
          ))}
          {nextDays.map(d => (
            <S.Item
              key={d.date}
              prevOrNext
              total={d.totalAppointments}
              onClick={() =>
                setSelectedDate(new Date(`${d.year} ${d.month} ${d.date}`))
              }
            >
              {d.date}
              {!!(d.totalAppointments > 0) && (
                <span>{d.totalAppointments}</span>
              )}
            </S.Item>
          ))}
        </S.Dates>
      </S.Body>
      <S.CalendarFooter>
        <button onClick={handlePrev}>
          <Plus size={24} />
        </button>
      </S.CalendarFooter>
    </S.Wrapper>
  )
}
export default Calendar
