import { classNames } from 'shared/lib/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: React.FC<ITextProps> = props => {
  return (
    <div className={classNames(cls.Text, {}, [props.className, cls[props.theme ?? TextTheme.PRIMARY]])}>
      {!!props.title && <p className={cls.title}>{props.title}</p>}
      {!!props.text && <p className={cls.text}>{props.text}</p>}
    </div>
  );
};
