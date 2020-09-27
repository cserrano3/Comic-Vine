import React from 'react';
import './style.scss';

interface LabelProps {
  text: string;
  className?: string;
  isInvalid?: boolean;
  forInput: string;
}

export default function Label({
  text,
  isInvalid,
  forInput,
  className = '' }: LabelProps) {
  return (
    <label
      htmlFor={forInput}
      className={`label ${isInvalid && 'label--invalid'} ${className}`}>
      {text}
    </label >
  );
}
