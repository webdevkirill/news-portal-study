import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('render', () => {
    componentRender(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('render clear theme', () => {
    componentRender(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
