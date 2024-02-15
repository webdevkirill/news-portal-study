import { AppRouter } from 'app/providers/router';

import { Navbar } from 'widgets/Navbar';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/theme/lib/useTheme';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', undefined, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
