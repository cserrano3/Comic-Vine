import React from 'react';

import './style.scss';

interface Props {
  imageURL: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  alt: string;
}

export default function Avatar({
  imageURL,
  size = 'medium',
  className = '',
  alt }: Props) {
  return (
    <img
      data-testid="avatar"
      src={imageURL}
      className={`avatar--${size} ${className}`}
      alt={alt}
    />
  );
}
