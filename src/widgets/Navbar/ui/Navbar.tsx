import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = props => {
  const { t } = useTranslation();

  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const handleToggleAuthModal = useCallback(() => {
    setIsOpenAuthModal(prev => !prev);
  }, []);

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

      <Modal isOpen={isOpenAuthModal} onHandleClose={handleToggleAuthModal}>
        Auth
      </Modal>
    </div>
  );
};
