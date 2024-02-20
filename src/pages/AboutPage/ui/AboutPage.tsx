import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation('about-page');

  return <div>{t('title')}</div>;
});

export default AboutPage;
