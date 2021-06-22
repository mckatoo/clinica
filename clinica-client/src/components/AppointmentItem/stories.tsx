import { Story, Meta } from '@storybook/react/types-6-0'
import AppointmentItem, { AppointmentItemProps } from '.'

export default {
  title: 'AppointmentItem',
  component: AppointmentItem,
  args: {
    id: '1',
    photo: 'https://pbs.twimg.com/media/DT2Ouz7W4AMoAY9.jpg',
    patient: 'Jão Miguel Figueira',
    start: '08:00'
  }
} as Meta

export const Default: Story<AppointmentItemProps> = args => (
  <AppointmentItem {...args} />
)
