import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle collapsed', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
