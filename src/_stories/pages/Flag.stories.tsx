// YourComponent.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import Flag from '@/components/Flag/Flag'

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Flag',
  component: Flag,
} as Meta<typeof Flag>

//π We create a βtemplateβ of how args map to rendering
const Template: StoryFn<typeof Flag> = (args) => <Flag {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  /*π The args you need here will depend on your component */
}
