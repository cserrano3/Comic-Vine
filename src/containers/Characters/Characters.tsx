import React from 'react';
import { useDispatch } from 'react-redux';
import getAllCharacters from '../../useCases/getAllCharacters/getAllCharacters';

export default function Characters() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    getAllCharacters(10, 10)(dispatch);
  })

  return (
    <div>hi</div>
  )
}