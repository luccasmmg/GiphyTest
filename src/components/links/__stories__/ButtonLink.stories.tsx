import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

export default {
  title: 'Components/Links/ButtonLink',
  component: ButtonLink,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {href: '', children: 'Button link'};
