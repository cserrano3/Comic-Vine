import React, {
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { CHARACTERS_PER_SCROLL } from '../../../helpers/constants';
import CharacterListItem from "../../molecules/CharaterListItem/CharaterListItem";
import Character from "../../../domains/Character";
import './style.scss'

interface Props {
  characters: Array<Character>;
  markAsFavorite?: (event: ChangeEvent<HTMLInputElement>) => void;
  loadCharacters: (offset?: number) => void;
}

export default function CharacterList({
  characters,
  markAsFavorite,
  loadCharacters,
}: Props) {


  const observerNodeCallback = useCallback(node => {
    if (node !== null) {
      new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio === 1) {
              // dispatch action to start loading characters

            }
          })
        },
        { threshold: 1 }
      ).observe(node);
    }
  }, [])

  useEffect(() => {
    // if, state is loading, call loadCharacters here
  }, [])


  return (
    <div className="character-list">
      <div className="character-list__wrapper">
        {characters.map((character) => {
          return (
            <CharacterListItem
              id={character.id}
              real_name={character.real_name}
              avatarURL={character.image.iconURL}
              aliases={character.aliases}
              name={character.name}
              gender={character.gender}
              birth={character.birth}
              markAsFavorite={markAsFavorite}
            />
          );
        })}
        <div ref={observerNodeCallback} className="interceptor"></div>
      </div>
    </div>
  );
}
