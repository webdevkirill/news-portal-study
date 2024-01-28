import { Link } from 'react-router-dom';

import { AppRouter } from 'app/providers/router';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/theme/lib/useTheme';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', undefined, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>

      <AppRouter />
    </div>
  );
};
