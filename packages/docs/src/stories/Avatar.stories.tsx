import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react/src/index'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],

  args: {
    src: 'https://github.com/RafaelR4mos.png',
    alt: 'Rafael Ramos',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
