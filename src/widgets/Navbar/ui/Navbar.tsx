import { classNames } from 'shared/lib/classNames';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = (props: React.FC<INavbarProps>) => {
  return (
    <div className={classNames(cls.Navbar, {}, [props.className])}>
      <p></p>
    </div>
  );
};
