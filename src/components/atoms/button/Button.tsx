import React from 'react';
import './style.scss';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  dataTestId?: string;
}

export default function Button({
  label,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  dataTestId = '' }: ButtonProps) {


  return (<button
    type={type}
    disabled={disabled}
    onClick={onClick}
    data-testid={dataTestId}
    className={`button ${className}`}>
    {label}
  </button>);
}
