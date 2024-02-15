import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './NavBar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = props => {
  return (
    <div className={classNames(cls.Navbar, {}, [props.className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
};
