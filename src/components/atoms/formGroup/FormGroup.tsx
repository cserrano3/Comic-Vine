import React from 'react';
import './style.scss';

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

export default function FormGroup({ children, className }: FormGroupProps) {
  return (
    <div className={`form-group ${className}`}>
      {children}
    </div>
  );
}
