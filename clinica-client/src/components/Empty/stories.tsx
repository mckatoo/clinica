import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Your patient list is empty',
  description: 'Patient added to your list will appear here',
  hasLink: true
}
