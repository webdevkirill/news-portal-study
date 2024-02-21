import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileStateData } from 'entities/Profile/model/selectors/getProfileData/getProfileStateData';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<IProfileCardProps> = props => {
  const { t } = useTranslation('profile-page');

  const profile = useSelector(getProfileStateData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [props.className])}>
      <div className={cls.header}>
        <Text title={t('title')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('buttons.edit', { ns: 'translations' })}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={profile?.first} placeholder={t('placeholders.first', { ns: 'translations' })} />
        <Input value={profile?.lastname} placeholder={t('placeholders.lastname', { ns: 'translations' })} />
      </div>
    </div>
  );
};
