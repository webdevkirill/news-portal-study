import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = props => {
  const { children, className, theme, ...rest } = props;

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} type="button" {...rest}>
      {children}
    </button>
  );
};
