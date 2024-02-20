import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { Spinner } from 'shared/ui/Spinner';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

interface ILoginModalProps {
  isOpen: boolean;
  onHandleClose: () => void;
  className?: string;
}

export const LoginModal: React.FC<ILoginModalProps> = props => {
  return (
    <Modal
      lazy
      isOpen={props.isOpen}
      onHandleClose={props.onHandleClose}
      className={classNames(cls.LoginModal, {}, [props.className])}
    >
      <Suspense fallback={<Spinner />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
