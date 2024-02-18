import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggleCollapsed = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}>
      <Button
        square
        size={ButtonSize.L}
        data-testid="sidebar-toggle"
        onClick={handleToggleCollapsed}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePaths.main}>
          <HomeIcon className={cls.icon} />
          <span className={cls.linkText}>{t('menu.main')}</span>
        </AppLink>

        <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePaths.about}>
          <AboutIcon className={cls.icon} />
          <span className={cls.linkText}>{t('menu.about')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
