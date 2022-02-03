import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default {
  title: 'Components/Links/UnderlineLink',
  component: UnderlineLink,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof UnderlineLink>;

const Template: ComponentStory<typeof UnderlineLink> = (args) => (
  <UnderlineLink {...args} />
);

export const Default = Template.bind({});
Default.args = { href: '/', children: 'Link'};
