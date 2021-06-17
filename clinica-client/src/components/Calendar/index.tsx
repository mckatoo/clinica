import { useState } from 'react'
import { default as ReactCalendar } from 'react-calendar'

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
      <S.Month>
        <h3>
          {months[date.getMonth()].toUpperCase()} de {date.getFullYear()}
        </h3>
      </S.Month>
      <S.Body>
        <ul className='days'>
          {week.map(w => (
            <li>{w}</li>
          ))}
        </ul>
        <ul className='dates'>
          <li className='prev'>30</li>
          <li className='prev'>31</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li className='active'>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li className='circle'>
            16 <span>5</span>
          </li>
          <li>17</li>
          <li>18</li>
          <li className='circle'>
            19 <span>6</span>
          </li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li className='next'>1</li>
          <li className='next'>2</li>
        </ul>
      </S.Body>
      <S.CalendarFooter>
        <a href='#' className='add'>
          +
        </a>
      </S.CalendarFooter>
    </S.Wrapper>
  )
}
export default Calendar
