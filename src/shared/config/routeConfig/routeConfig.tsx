import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  Main = 'main',
  About = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.About]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
};
