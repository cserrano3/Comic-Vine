import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCharacters } from '../../../stateManagement/characters/selectors';
import CharacterListItem from '../../molecules/CharaterListItem/CharaterListItem';
import getAllCharacters from '../../../useCases/getAllCharacters/getAllCharacters';
import Character from '../../../domains/Character';
import { fireEvent } from '@testing-library/react';


interface Props {
  characters?: Array<Character>;
  markAsFavorite?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CharacterList({
  characters,
  markAsFavorite
}: Props) {

  const [element, setElement] = useState(null);

  const page = useRef(1);

  const observer = useRef(
    new IntersectionObserver(entries => {
      console.log('entries -------- ', entries);
      console.log('first entry ----------- ', entries[0])

    }, {
      threshold: 1
    }));

  const dispatch = useDispatch();

  const fetchCharacters = useCallback(async page => {
    getAllCharacters(10, page.current)(dispatch)
  }, []);

  const handleInitial = useCallback(async page => {
    await fetchCharacters(page);
  }, [fetchCharacters])

  const loadMore = useCallback(() => {
    page.current = (page.current + 1) * 10;
    handleInitial(page);
  }, [handleInitial])

  useEffect(() => {
    handleInitial(10);
  }, [handleInitial]);


  useEffect(() => {

    const currentObserver = observer.current;

    const currentElement = element;


    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };

  }, [element, observer])

  const charactersList = useSelector(selectCharacters);

  return (
    <>
      {
        charactersList.map(character => {
          return <CharacterListItem
            real_name={character.real_name}
            avatarURL={character.image.iconURL}
            aliases={character.aliases}
            name={character.name}
            gender={character.gender}
            birth={character.birth}
            markAsFavorite={markAsFavorite}
          />
        })
      }
      <button ref={setElement} onClick={loadMore}>Load More</button>
    </>
  )
}