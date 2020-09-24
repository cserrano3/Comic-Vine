import React from 'react';
import './style.scss';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  label: string;
  className?: string;
  variation?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
}

export default function Button({
  label,
  onClick,
  type,
  variation = '',
  className = '',
  disabled = false }: ButtonProps) {

  const _determineVariation = (variation: string) => variation !== '' ? `--${variation}` : '';

  return (<button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`button${_determineVariation(variation)} ${className}`}>
    {label}
  </button>);
}
