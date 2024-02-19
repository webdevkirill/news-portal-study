import { HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

export const Input: React.FC<IInputProps> = memo(props => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    autofocus,
    onChange,
    onFocus,
    onBlur,
    onSelect,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus?.();
    }
  }, [autofocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleSelect = (e: any) => {
    onSelect?.(e);

    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {!!placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          className={cls.input}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          onSelect={handleSelect}
          ref={inputRef}
          {...rest}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} />}
      </div>
    </div>
  );
});
