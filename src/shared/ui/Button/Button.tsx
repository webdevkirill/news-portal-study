import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<IButtonProps> = props => {
  const { children, className, theme, square, size = ButtonSize.M, disabled = false, ...rest } = props;

  return (
    <button
      className={classNames(cls.Button, { [cls.square]: !!square, [cls.disabled]: disabled }, [
        className,
        cls[theme],
        cls[size],
      ])}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
