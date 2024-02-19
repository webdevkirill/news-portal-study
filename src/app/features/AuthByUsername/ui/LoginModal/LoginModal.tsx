import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';
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
      <LoginForm />
    </Modal>
  );
};
