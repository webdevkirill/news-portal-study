import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './Pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>

      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />{' '}
        </Routes>
      </Suspense>
    </div>
  );
};
