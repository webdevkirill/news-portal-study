import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './NavBar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = props => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [props.className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
          {t('menu.main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('menu.about')}
        </AppLink>
      </div>
    </div>
  );
};
