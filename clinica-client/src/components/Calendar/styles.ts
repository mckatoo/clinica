import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

type ItemProps = {
  prevOrNext?: boolean
  now?: boolean
  total: number
}

const wrapperModifiers = {
  prevOrNext: (theme: DefaultTheme) => css`
    color: ${darken(-0.2, theme.colors.gray)};
  `,
  now: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `,
  total: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.secondary};
    border-radius: ${theme.border.circle};
    span {
      position: absolute;
      top: -0.75rem;
      right: -0.5rem;
      width: 1.75rem;
      height: 1.75rem;
      font-size: 1.2rem;
      color: ${theme.colors.white};
      border-color: ${theme.colors.secondary};
      border-radius: ${theme.border.radius};
      background: ${theme.colors.secondary};
    }
  `
}

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    display: grid;
    grid-template-rows: 8rem auto;
  `}
`

export const Body = styled.section`
  ${({ theme }) => css`
    padding: 1.5rem 2rem;
    border-top: 1px solid darken(-0.2, ${theme.colors.gray});
    border-bottom: 1px solid darken(-0.2, ${theme.colors.gray});

    ul {
      list-style-type: none;
    }
  `}
`

export const Week = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  li {
    flex: 1;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: $gray;
    margin: 0 1px;
  }
`

export const Dates = styled.ul`
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  text-align: center;
`

export const Item = styled.li<ItemProps>`
  ${({ theme, prevOrNext, now, total }) => css`
    width: 3.5rem;
    height: 3.5rem;
    display: grid;
    place-items: center;
    font-weight: bold;
    position: relative;
    cursor: pointer;

    ${prevOrNext && wrapperModifiers.prevOrNext(theme)};
    ${now && wrapperModifiers.now(theme)};
    ${!!(total > 0) && wrapperModifiers.total(theme)};
  `}
`

export const Month = styled.section`
  ${({ theme }) => css`
    padding: 0 1.25rem;
    color: ${theme.colors.gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  button {
    ${({ theme }) => css`
      background: ${theme.colors.secondary};
      border-radius: ${theme.border.circle};
      border: none;
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};

      &:hover {
        color: ${darken(0.1, theme.colors.primary)};
      }
    `}
  }
`

export const CalendarFooter = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    display: flex;
    justify-content: center;
    button {
      text-decoration: none;
      color: inherit;
      border: 2px solid ${theme.colors.secondary};
      border-radius: ${theme.border.radius};
      width: 3.5rem;
      height: 3.5rem;
      padding-top: 0.25rem;
      place-items: center;
    }
  `}
`
