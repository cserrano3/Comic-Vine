import React, { HTMLAttributes } from 'react';
import { useField } from 'formik';
import './styles.scss';

interface Props {
  type: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  name: string;
  className?: string;
  placeholder?: string;
  invalid?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  disabled,
  name,
  invalid = false,
  className = '',
  placeholder = '',
  onChange,
  onBlur,
  onFocus,
}: Props) {

  const [field] = useField({ name, type });

  const triggerOnChange = (event: React.ChangeEvent) => {
    field.onChange(event);
    { onChange && onChange(event) }
  };

  const triggerOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    field.onBlur(event);
    { onBlur && onBlur(event) }
  };

  const triggerOnFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    onFocus(event);
  }, [onFocus])

  return (
    <input
      onChange={triggerOnChange}
      value={field.value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={triggerOnBlur}
      name={name}
      onFocus={triggerOnFocus}
      className={`input ${invalid ?
        'input--invalid' : ''} ${className}`} />
  );
}