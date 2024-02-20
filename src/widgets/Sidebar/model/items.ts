import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sidebarItemList: ISidebarItem[] = [
  {
    path: RoutePaths.main,
    text: 'menu.main',
    Icon: HomeIcon,
  },
  {
    path: RoutePaths.about,
    text: 'menu.about',
    Icon: AboutIcon,
  },
  {
    path: RoutePaths.profile,
    text: 'menu.profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
