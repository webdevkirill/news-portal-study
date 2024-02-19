import { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/theme/lib/useTheme';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', undefined, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
