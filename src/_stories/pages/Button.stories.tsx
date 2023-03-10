// YourComponent.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import MehrButton from '@/components/MehrButton/MehrButton'

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MehrButton',
  component: MehrButton,
} as Meta<typeof MehrButton>

//π We create a βtemplateβ of how args map to rendering
const Template: StoryFn<typeof MehrButton> = (args) => (
  <MehrButton {...args}>Button</MehrButton>
)

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*π The args you need here will depend on your component */
}
