import { Meta, Story } from '@storybook/react/types-6-0'

import TextAreaField, { TextAreaFieldProps } from './'

export default {
  title: 'Form/TextAreaField',
  component: TextAreaField,
  args: {
    label: 'Address',
    name: 'address',
    initialValue: '',
    placeholder: 'Endereço do fulano \nCidade\nEstado\nCEP',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextAreaFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextAreaField {...args} />
  </div>
)

export const withError: Story<TextAreaFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextAreaField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
