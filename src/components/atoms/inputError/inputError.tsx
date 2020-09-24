import React from 'react';
import './style.scss';

interface Props {
  invalidFeedback: string;
}

export default function InputError({
  invalidFeedback,
}: Props) {
  return (
    <>
      {
        !!invalidFeedback && <div className='feedback--invalid'>
          {invalidFeedback}
        </div>
      }
      {
        !invalidFeedback && null
      }
    </>
  );
}