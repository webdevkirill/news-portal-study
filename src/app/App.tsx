import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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

      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />{' '}
        </Routes>
      </Suspense>
    </div>
  );
};
