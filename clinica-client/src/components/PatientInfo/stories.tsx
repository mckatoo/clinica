import { Story, Meta } from '@storybook/react/types-6-0'
// import { CartContextData } from 'hooks/use-cart'
import PatientInfo, { PatientInfoProps } from '.'
import mockPatient from './mock'

export default {
  title: 'Patient/PatientInfo',
  component: PatientInfo,
  parameters: {
    backgrounds: {
      default: 'ikatoo-dark'
    }
  },
  args: mockPatient
} as Meta

export const Default: Story<PatientInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <PatientInfo {...args} />
  </div>
)

// export const IsInCart: Story<PatientInfoProps & CartContextData> = (args) => (
//   <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
//     <PatientInfo {...args} />
//   </div>
// )

// IsInCart.args = {
//   isInCart: () => true
// }
