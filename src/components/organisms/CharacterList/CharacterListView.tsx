import React, {
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { CHARACTERS_PER_SCROLL } from '../../../helpers/constants';
import CharacterListItem from "../../molecules/CharaterListItem/CharaterListItem";
import Character from "../../../domains/Character";
import './style.scss'
import { InfiniteScrollStatus } from "../../../stateManagement/characters/state";

interface Props {
  characters: Array<Character>;
  markAsFavorite?: (event: ChangeEvent<HTMLInputElement>) => void;
  loadCharacters: (offset?: number) => void;
  startFetching: () => void;
  scrollingStatus: InfiniteScrollStatus;
}

export default function CharacterList({
  characters,
  markAsFavorite,
  loadCharacters,
  startFetching,
  scrollingStatus
}: Props) {


  const observerNodeCallback = useCallback(node => {
    console.log('opoooooraaaaa')
    if (node !== null) {
      new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.75) {
              // dispatch action to start loading characters
              startFetching();
            }
          })
        },
        { threshold: 0.75 }
      ).observe(node);
    }
  }, [])

  useEffect(() => {
    if (scrollingStatus === 'LOADING') {
      loadCharacters(CHARACTERS_PER_SCROLL)
    }
  }, [scrollingStatus])


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
