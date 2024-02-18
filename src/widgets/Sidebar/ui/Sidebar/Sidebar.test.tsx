import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle collapsed', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
