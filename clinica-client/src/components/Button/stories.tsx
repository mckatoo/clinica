import { Meta, Story } from '@storybook/react/types-6-0'
import { CalendarPlus } from '@styled-icons/boxicons-regular'

import Button, { ButtonProps } from './'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'To Schedule'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'To Schedule',
  icon: <CalendarPlus />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'To Schedule',
  as: 'a',
  href: '/link'
}
