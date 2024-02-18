import { useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapsed = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}>
      <Button data-testid="sidebar-toggle" onClick={handleToggleCollapsed}>
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} />
      </div>
    </div>
  );
};
