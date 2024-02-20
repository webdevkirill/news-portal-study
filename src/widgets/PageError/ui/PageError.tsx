import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: React.FC<IPageErrorProps> = memo(props => {
  const { t } = useTranslation();

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [props.className])}>
      <p>{t('page-error')}</p>
      <Button onClick={handleReloadPage}>{t('buttons.reload-page')}</Button>
    </div>
  );
});
