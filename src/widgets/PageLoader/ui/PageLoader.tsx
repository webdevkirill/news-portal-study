import { classNames } from 'shared/lib/classNames';
import { Spinner } from 'shared/ui/Spinner';

import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = props => {
  return (
    <div className={classNames(cls.PageLoader, {}, [props.className])}>
      <Spinner />
    </div>
  );
};
