// YourComponent.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import MehrButton from '@/components/MehrButton/MehrButton'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MehrButton',
  component: MehrButton,
} as Meta<typeof MehrButton>

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof MehrButton> = (args) => (
  <MehrButton {...args}>Button</MehrButton>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
}
