import React from 'react';
import './style.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ListItem({ children, className }: Props) {
  return (
    <li className={`list-item ${className}`}>
      {children}
    </li>
  )
}