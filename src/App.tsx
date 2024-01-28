import { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './Pages/MainPage/MainPage.async';

export const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="app">
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
