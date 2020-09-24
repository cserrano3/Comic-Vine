import React from 'react';
import './style.scss';

interface LabelProps {
  text: string;
  className?: string;
  isInvalid?: boolean;
}

export default function Label({
  text,
  isInvalid,
  className = '' }: LabelProps) {
  return (
    <label className={`label ${isInvalid && 'label--invalid'} ${className}`}>{text}</label>
  );
}
