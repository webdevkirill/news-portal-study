import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/theme';

import { Button, ThemeButton } from '.';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Clear = Template.bind({});
Clear.args = {
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ThemeButton.OUTLINE,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
