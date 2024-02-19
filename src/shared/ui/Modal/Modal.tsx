import { useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';

import cls from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onHandleClose: () => void;
  className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<IModalProps> = props => {
  const { children, className, isOpen, onHandleClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    setIsClosing(true);

    timeoutRef.current = setTimeout(() => {
      onHandleClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onHandleClose]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, handleKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, { [cls.opened]: isOpen, [cls.isClosing]: isClosing }, [className])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
