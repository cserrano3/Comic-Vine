import React from 'react';
import './style.scss';

interface Props {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export default function IconCheckbox({ name, onChange, checked }: Props) {
  return (
    <>
      <input
        id="icon"
        className="icon"
        defaultChecked={checked}
        type="checkbox"
        name={name}
        onChange={onChange} />
      <label htmlFor="icon" className="icon-label">★</label>
    </>
  )
}
