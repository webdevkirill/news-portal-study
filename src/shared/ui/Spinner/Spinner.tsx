import { classNames } from 'shared/lib/classNames';

import cls from './Spinner.module.scss';

interface ISpinnerProps {
  className?: string;
}

export const Spinner: React.FC<ISpinnerProps> = props => {
  return (
    <div className={classNames(cls.Spinner, {}, [props.className])}>
      <div />
    </div>
  );
};
