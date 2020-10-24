import React, {
  ChangeEvent,
  useCallback,
  useRef,
} from "react";
import CharacterListItem from "../../molecules/CharaterListItem/CharaterListItem";
import Character from "../../../domains/Character";
import './style.scss'
import { InfiniteScrollStatus } from "../../../stateManagement/characters/state";

interface Props {
  characters: Array<Character>;
  markAsFavorite?: (event: ChangeEvent<HTMLInputElement>) => void;
  loadCharacters?: (offset?: number) => void;
  startFetching: (isIntersecting?: boolean) => void;
  scrollingStatus: InfiniteScrollStatus;
}

export default function CharacterList({
  characters,
  markAsFavorite,
  startFetching,
}: Props) {

  const listRef = useRef(null)

  const observerNodeCallback = useCallback(node => {
    if (node !== null) {
      new IntersectionObserver(
        entries => {
          if (entries[0].intersectionRatio >= 0.75 && entries[0].boundingClientRect.y > (listRef.current.offsetHeight - 20)) {
            startFetching();
          }

        },
        { threshold: 0.75 }
      ).observe(node);
    }
  }, [])


  return (
    <div className="character-list" ref={listRef}>
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
