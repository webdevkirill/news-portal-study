import { addDecorator } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // i18n,
  // locale: 'ru',
  // locales: {
  //   ru: 'Русский',
  //   en: 'English',
  // },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
