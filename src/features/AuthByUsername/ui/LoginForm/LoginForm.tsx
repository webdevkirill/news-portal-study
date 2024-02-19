import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<ILoginFormProps> = memo(props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const usernameValue = useSelector(getLoginUsername);
  const usernamePass = useSelector(getLoginPassword);
  const loginLoading = useSelector(getLoginIsLoading);
  const loginError = useSelector(getLoginError);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username: usernameValue, password: usernamePass }));
  }, [dispatch, usernameValue, usernamePass]);

  return (
    <div className={classNames(cls.LoginForm, {}, [props.className])}>
      {loginError && <p>{loginError}</p>}
      <Input
        value={usernameValue}
        type="text"
        placeholder={t('inputs.username')}
        onChange={handleChangeUsername}
        autofocus
      />
      <Input value={usernamePass} type="text" placeholder={t('inputs.password')} onChange={handleChangePassword} />
      <Button disabled={loginLoading} theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={handleLoginClick}>
        {t('buttons.login')}
      </Button>
    </div>
  );
});
