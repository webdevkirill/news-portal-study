import { memo, useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { sidebarItemList } from 'widgets/Sidebar/model/items';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import { SidebarLinkItem } from '../SidebarLinkItem/SidebarLinkItem';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = memo(props => {
  const [collapsed, setCollapsed] = useState(false);

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
        {sidebarItemList.map(item => (
          <SidebarLinkItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
