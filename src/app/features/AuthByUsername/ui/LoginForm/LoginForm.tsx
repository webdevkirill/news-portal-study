import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = props => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [props.className])}>
      <Input type="text" placeholder={t('inputs.username')} autofocus />
      <Input type="text" placeholder={t('inputs.password')} />
      <Button className={cls.loginBtn}>{t('buttons.login')}</Button>
    </div>
  );
};
