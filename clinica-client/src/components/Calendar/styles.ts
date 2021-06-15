import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    display: grid;
    grid-template-rows: 8rem auto;
  `}
`

export const CalendarFooter = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    a {
      text-decoration: none;
      color: inherit;
      border: 2px solid ${theme.colors.secondary};
      border-radius: ${theme.border.radius};
      width: 3.5rem;
      height: 3.5rem;
      padding-top: 0.25rem;
      display: grid;
      place-items: center;
    }
  `}
`
