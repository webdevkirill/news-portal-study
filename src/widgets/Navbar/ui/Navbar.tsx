import { classNames } from 'shared/lib/classNames';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = props => {
  return (
    <div className={classNames(cls.Navbar, {}, [props.className])}>
      <div className={classNames(cls.links)} />
    </div>
  );
};
