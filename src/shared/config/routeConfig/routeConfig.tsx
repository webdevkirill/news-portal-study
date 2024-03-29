import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoutes {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  NotFound = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.Profile]: '/profile',
  [AppRoutes.NotFound]: '*',
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
  [AppRoutes.Profile]: {
    path: RoutePaths.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.NotFound]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
