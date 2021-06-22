import { useEffect, useState } from 'react'

import { Plus, SkipNext, SkipPrevious } from '@styled-icons/boxicons-regular'

import mock from './mock'
import * as S from './styles'

type DateProps = {
  weekday: string
  day: string
  month: string
  year: string
  totalAppointments: number
}

export type CalendarProps = {
  month: DateProps[]
}

const Calendar = ({ month = mock }: CalendarProps) => {
  // const months = [
  //   'janeiro',
  //   'fevereiro',
  //   'março',
  //   'abril',
  //   'maio',
  //   'junho',
  //   'julho',
  //   'agosto',
  //   'setembro',
  //   'outubro',
  //   'novembro',
  //   'dezembro'
  // ]
  const week = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.']

  const [date, setDate] = useState(new Date())
  // const [monthOfCalendar, setMonthOfCalendar] = useState(
  //   months[date.getMonth()]
  // )

  const daysOfMonth = fillMonth(date)
  const previewDays = fillPreviewDays(date)
  const nextDays = fillNextDays(date)

  function weekdayFromDate (date: Date, format?: 'withNumber') {
    const weekday = Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(
      date
    )
    if (format === 'withNumber') return date.getDay().toString()

    return weekday
  }

  function getTotalAppointmentsOfDay (day: Date): number {
    const _DAY = day.getDate().toString()
    const _MONTH = (day.getMonth() + 1).toString()
    const _YEAR = day.getFullYear().toString()

    const date = month.find(
      d => d.day === _DAY && d.month === _MONTH && d.year === _YEAR
    )
    const total = date?.totalAppointments || 0

    return total
  }

  function fillPreviewDays (date?: Date): DateProps[] {
    const timestamp = !!date ? date.getTime() : new Date().getTime()
    const previewDays: DateProps[] = []
    const cursor = date || new Date()
    cursor.setDate(1)

    while (weekdayFromDate(cursor, 'withNumber') !== '0') {
      cursor.setDate(cursor.getDate() - 1)
      previewDays.push({
        weekday: weekdayFromDate(cursor),
        day: cursor.getDate().toString(),
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
    cursor.setDate(cursor.getDate() - 1) //31
    const nextMonth = cursor.getMonth() < 11 ? cursor.getMonth() + 1 : 0

    while (weekdayFromDate(cursor, 'withNumber') !== '6') {
      cursor.setDate(cursor.getDate() + 1)
      if (cursor.getMonth() === nextMonth) {
        nextDays.push({
          weekday: weekdayFromDate(cursor),
          day: cursor.getDate().toString(),
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
        weekday: weekdayFromDate(cursor),
        day: cursor.getDate().toString(),
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
    date.setMonth(date.getMonth() - 1)
    setDate(date)
  }

  function handleNext () {
    date.setMonth(date.getMonth() + 1)
    setDate(date)
  }

  function isNow (d: Pick<DateProps, 'day' | 'month' | 'year'>): Boolean {
    return (
      Intl.DateTimeFormat('pt-BR').format(new Date()) ===
      Intl.DateTimeFormat('pt-BR').format(
        new Date(`${d.year}/${d.month}/${d.day}`)
      )
    )
  }

  useEffect(() => {
    fillMonth(date)
    fillPreviewDays(date)
    fillNextDays(date)
  }, [date])

  return (
    <S.Wrapper>
      <S.Month>
        <button onClick={handlePrev}>
          <SkipPrevious size={24} />
        </button>
        <h3>
          {Intl.DateTimeFormat('pt-BR', { month: 'long' })
            .format(date)
            .toUpperCase()}{' '}
          de {date.getFullYear()}
        </h3>
        <button onClick={handleNext}>
          <SkipNext size={24} />
        </button>
      </S.Month>
      <S.Body>
        <ul className='week'>
          {week.map(w => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        <ul className='dates'>
          {previewDays.map(d =>
            !!(d.totalAppointments > 0) ? (
              <li
                key={d.day}
                className='prev circle'
                onClick={() =>
                  setDate(new Date(`${d.year} ${d.month} ${d.day}`))
                }
              >
                {d.day}
                <span>{d.totalAppointments}</span>
              </li>
            ) : (
              <li
                key={d.day}
                className='prev'
                onClick={() =>
                  setDate(new Date(`${d.year} ${d.month} ${d.day}`))
                }
              >
                {d.day}
              </li>
            )
          )}
          {daysOfMonth.map(d =>
            !!(d.totalAppointments > 0) ? (
              <li
                key={d.day}
                className={!!isNow(d) ? 'active circle' : 'circle'}
                onClick={() => {
                  setDate(new Date(`${d.year} ${d.month} ${d.day}`))
                }}
              >
                {d.day}
                <span>{d.totalAppointments}</span>
              </li>
            ) : (
              <li
                key={d.day}
                className={!!isNow(d) ? 'active' : ''}
                onClick={() =>
                  setDate(new Date(`${d.year} ${d.month} ${d.day}`))
                }
              >
                {d.day}
              </li>
            )
          )}
          {nextDays.map(d =>
            !!(d.totalAppointments > 0) ? (
              <li
                key={d.day}
                className='next circle'
                onClick={() =>
                  setDate(new Date(`${d.year} ${d.month} ${d.day}`))
                }
              >
                {d.day}
                <span>{d.totalAppointments}</span>
              </li>
            ) : (
              <li
                key={d.day}
                className='next'
                onClick={() =>
                  setDate(new Date(`${d.year} ${d.month} ${d.day}`))
                }
              >
                {d.day}
              </li>
            )
          )}
        </ul>
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
