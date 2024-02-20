import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';

import { userActions } from 'entities/User';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = props => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const handleToggleAuthModal = useCallback(() => {
    setIsOpenAuthModal(prev => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [props.className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={classNames(cls.links)}
          onClick={handleLogout}
          type="button"
        >
          {t('buttons.logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [props.className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classNames(cls.links)}
        onClick={handleToggleAuthModal}
        type="button"
      >
        {t('buttons.login')}
      </Button>

      <LoginModal isOpen={isOpenAuthModal} onHandleClose={handleToggleAuthModal} />
    </div>
  );
};
