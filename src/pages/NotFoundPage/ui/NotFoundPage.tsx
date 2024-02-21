import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
  const { t } = useTranslation('not-found-page');

  return <div className={cls.NotFoundPage}>{t('title')}</div>;
});

export default NotFoundPage;
