import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import { ISidebarItem } from '../../model/items';
import cls from './SidebarLinkItem.module.scss';

interface ISidebarLinkItemProps {
  item: ISidebarItem;
  collapsed: boolean;
}

export const SidebarLinkItem: React.FC<ISidebarLinkItemProps> = memo(props => {
  const { item } = props;
  const { t } = useTranslation();

  return (
    <AppLink
      className={classNames(cls.SidebarLinkItem, { [cls.collapsed]: props.collapsed }, [])}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.linkText}>{t(item.text)}</span>
    </AppLink>
  );
});
