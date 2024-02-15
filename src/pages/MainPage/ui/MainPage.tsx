import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main-page');

  return <div>{t('title')}</div>;
};

export default MainPage;
