import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLinkProps> = memo(props => {
  const { className, theme = AppLinkTheme.PRIMARY, children, ...rest } = props;

  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
});
