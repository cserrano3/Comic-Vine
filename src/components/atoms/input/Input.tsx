import React from 'react';
import { useField } from 'formik';
import './styles.scss';

interface Props {
  type: string;
  required?: boolean;
  disabled?: boolean;
  name: string;
  className?: string;
  placeholder?: string;
  invalid?: boolean;
}

export default function Input({
  type,
  disabled,
  name,
  invalid,
  className = '',
  placeholder = ''
}: Props) {
  const [field, meta] = useField({ name, type });
  return (
    <input
      {...field}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      className={`input ${invalid &&
        'input--invalid'} ${className}`} />
  );
}