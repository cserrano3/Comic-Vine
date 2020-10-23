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
  loadCharacters?: (offset?: number) => void;
  startFetching: (isIntersecting: boolean) => void;
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
    if (node !== null) {
      new IntersectionObserver(
        entries => {
          console.log('entries ---------- ', entries[0].intersectionRatio > 0.9 && entries[0].isIntersecting) // TODO: it's necessaary to sync this rendering condition with the controller

          // dispatch action to start loading characters
          startFetching(entries[0].intersectionRatio > 0.9 && entries[0].isIntersecting);


        },
        { threshold: 0.8 }
      ).observe(node);
    }
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
