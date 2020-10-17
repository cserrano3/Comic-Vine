import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import CharacterListItem from "../../molecules/CharaterListItem/CharaterListItem";
import Character from "../../../domains/Character";

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
  const [element, setElement] = useState(null);
  const offset = useRef(1);

  const observerOptions = {
    threshold: 0.75,
  };

  const intersectionObserverCallback = (
    entries: Array<IntersectionObserverEntry>
  ) => {
    const firstEntry = entries[0];

    if (firstEntry.isIntersecting) {
      loadCharacters(offset.current + 10);
    }
  };

  const observer = useRef(
    new IntersectionObserver(intersectionObserverCallback, observerOptions)
  );

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
  }, [element, observer]);

  return (
    <>
      {characters.map((character) => {
        return (
          <CharacterListItem
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
      <div ref={setElement}>Load More</div>
    </>
  );
}
