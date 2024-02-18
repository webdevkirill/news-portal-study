import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LigthTheme from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'shared/theme';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [props.className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LigthTheme />}
    </Button>
  );
};
