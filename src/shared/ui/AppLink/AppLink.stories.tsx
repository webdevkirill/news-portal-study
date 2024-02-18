import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/theme';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'link',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
