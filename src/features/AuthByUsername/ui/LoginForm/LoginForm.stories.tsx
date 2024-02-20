import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/theme';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  args: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: 'admin',
    },
  }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: 'admin',
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: 'admin',
      error: 'Some error',
    },
  }),
];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'admin',
      password: 'admin',
      isLoading: true,
    },
  }),
];
