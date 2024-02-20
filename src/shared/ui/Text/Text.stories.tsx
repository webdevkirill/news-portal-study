import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/theme';

import { Text, TextTheme } from '.';

export default {
  title: 'shared/Text',
  component: Text,
  args: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextWithTitle = Template.bind({});
TextWithTitle.args = {
  title: 'title',
  text: 'text',
};

export const TextWithTitleDark = Template.bind({});
TextWithTitleDark.args = {
  title: 'title',
  text: 'text',
};
TextWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  title: 'title',
  text: 'text',
  theme: TextTheme.ERROR,
};
