import { Story, Meta } from '@storybook/react/types-6-0'
// import { AttendingContextData } from 'hooks/use-attending'

import PatientCard, { PatientCardProps } from '.'

export default {
  title: 'PatientCard',
  component: PatientCard,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  },
  args: {
    slug: '29032543890',
    name: 'Milton Carlos Katoo',
    phone: '19-99906-5094',
    photo: 'https://source.unsplash.com/user/willianjusten/354x472'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<PatientCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <PatientCard {...args} />
  </div>
)

// export const IsInAttending: Story<PatientCardProps & AttendingContextData> = (args) => (
export const IsInAttending: Story<PatientCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <PatientCard {...args} />
  </div>
)

// IsInAttending.args = {
//   isInAttending: () => true
// }

export const WithRibbon: Story<PatientCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <PatientCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
