import { Meta, Story } from '@storybook/react/types-6-0'

import AppointmentList from './'
import mock from 'components/Calendar/mock'

export default {
  title: 'AppointmentList',
  component: AppointmentList,
  argTypes: {
    cartContextValue: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <AppointmentList {...args} />
  </div>
)

Default.args = {
  total: 'R$ 330,00',
  cartContextValue: { mock }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <AppointmentList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: { mock }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <AppointmentList />
  </div>
)
