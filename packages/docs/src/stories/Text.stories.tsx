import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react/src/index'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, libero accusamus quaerat debitis eius, ducimus blanditiis doloremque inventore animi earum totam atque voluptate ratione ullam maxime commodi harum tempore! Laudantium?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
