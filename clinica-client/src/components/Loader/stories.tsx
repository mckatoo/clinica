import { Meta, Story } from '@storybook/react/types-6-0'

import Loader from './'
import styled, { css } from 'styled-components'

export default {
  title: 'Loader',
  component: Loader,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

const Loading = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    min-width: 56rem;
    svg {
      height: 10rem;
      width: 10rem;
    }
  `}
`
export const Default: Story = () => (
  <Loading>
    <Loader />
  </Loading>
)
