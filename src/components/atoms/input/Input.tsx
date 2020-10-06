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
  value
}: Props) {

  const [field] = useField({ name, type });


  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={onBlur}
      name={name}
      onFocus={onFocus}
      className={`input ${invalid ?
        'input--invalid' : ''} ${className}`} />
  );
}