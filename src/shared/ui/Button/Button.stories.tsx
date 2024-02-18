import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/theme';
import { ButtonSize } from 'shared/ui/Button';

import { Button, ButtonTheme } from '.';

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
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ButtonTheme.OUTLINE,
};

export const OutlineLarge = Template.bind({});
OutlineLarge.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineExtraLarge = Template.bind({});
OutlineExtraLarge.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareMediumBackgroundInverted = Template.bind({});
SquareMediumBackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
};

export const SquareLargeBackgroundInverted = Template.bind({});
SquareLargeBackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.L,
};

export const SquareExtraLargeBackgroundInverted = Template.bind({});
SquareExtraLargeBackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.XL,
};

export const SquareMediumBackground = Template.bind({});
SquareMediumBackground.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: '>',
};

export const SquareLargeBackground = Template.bind({});
SquareLargeBackground.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: '>',
  size: ButtonSize.L,
};

export const SquareExtraLargeBackground = Template.bind({});
SquareExtraLargeBackground.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: '>',
  size: ButtonSize.XL,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareMediumBackgroundInvertedDark = Template.bind({});
SquareMediumBackgroundInvertedDark.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
};
SquareMediumBackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareMediumBackgroundDark = Template.bind({});
SquareMediumBackgroundDark.args = {
  theme: ButtonTheme.BACKGROUND,
  square: true,
  children: '>',
};
SquareMediumBackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];
