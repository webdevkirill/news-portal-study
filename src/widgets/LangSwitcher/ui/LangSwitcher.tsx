import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = memo(props => {
  const { i18n } = useTranslation();

  const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [props.className])}
      theme={ButtonTheme.CLEAR}
      onClick={handleChangeLang}
    >
      {i18n.language ?? 'ru'}
    </Button>
  );
});
