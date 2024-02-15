import { useState } from 'react';

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
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [props.className])}>
      <Button onClick={handleToggleCollapsed}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
