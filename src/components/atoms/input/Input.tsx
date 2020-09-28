import React from 'react';
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
  onChange?: (event: React.ChangeEvent) => void,
}

export default function Input({
  type,
  disabled,
  name,
  invalid = false,
  className = '',
  placeholder = '',
  onChange
}: Props) {

  const [field] = useField({ name, type });

  const triggerOnChange = (event: React.ChangeEvent) => {
    field.onChange(event);
    { onChange && onChange(event) }
  };

  return (
    <input
      onChange={triggerOnChange}
      value={field.value}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      name={name}
      className={`input ${invalid ?
        'input--invalid' : ''} ${className}`} />
  );
}