import { Meta, Story } from '@storybook/react/types-6-0'

import Calendar, { CalendarProps } from './'
import mock from './mock'

export default {
  title: 'Calendar',
  component: Calendar,
  args: {
    month: mock
  }
} as Meta

export const Basic: Story<CalendarProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Calendar {...args} />
  </div>
)
