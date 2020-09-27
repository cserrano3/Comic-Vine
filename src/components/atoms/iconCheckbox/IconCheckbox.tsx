import React from 'react';
import { useField } from 'formik';
import './style.scss';

interface Props {
  name: string;
}

export default function IconCheckbox({ name }: Props) {
  const [field] = useField({ name });
  return (
    <>
      <input id="icon" className="icon" type="checkbox" name={name} {...field} />
      <label htmlFor="icon" className="icon-label">★</label>
    </>
  )
}
