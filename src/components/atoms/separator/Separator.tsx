import React from 'react';
import './style.scss';

interface Props {
  className?: string;
}

export default function Separator({ className = '' }: Props) {
  return (<span className={`separator ${className}`}>
    ·
  </span >);
}
