import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';

import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface IProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<IProfilePageProps> = memo(props => {
  const { t } = useTranslation('profile-page');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [props.className])}>{t('title')}</div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
