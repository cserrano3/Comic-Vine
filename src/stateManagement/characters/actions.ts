import { InfiniteScrollStatus } from './state';
import { parseImages } from './../../converters/images';
import { parseAliases } from './../../converters/aliases';
import { formatDate } from './../../converters/date';
import Error from '../../domains/Error';
import {
  CharactersActionTypes,
  startFetch,
  errorFetch,
  reachedEnd,
  fetchSuccess
} from './actionTypes';
import cloneDeep from 'lodash.clonedeep';
import { mapGender } from '../../converters/mapGender';
import CharacterServiceResponse from '../../domains/CharactersServiceResponse';
import Character from '../../domains/Character';

export function startFetching(status: InfiniteScrollStatus): CharactersActionTypes {
  return {
    type: startFetch,
    payload: status
  };
}

export function fetchingSuccess(
  payload: {
    characters: Array<CharacterServiceResponse>;
    offset: number;
    status: string;
  }): CharactersActionTypes {
  
  const newCharacters = cloneDeep(payload.characters);

  const parsedCharacters = newCharacters.map(character => ({
    ...character,
    gender: mapGender(character?.gender),
    birth: character?.birth ? formatDate(character?.birth) : null,
    aliases: parseAliases(character?.aliases),
    image: parseImages(character.image)
  }));

  return {
    type: fetchSuccess,
    payload: {
      characters: parsedCharacters,
      offset: payload.offset,
      status: payload.status
    }
  };
}

export function getCharactersError(error: Error): CharactersActionTypes {
  return {
    type: GET_CHARACTERS_ERROR,
    payload: error
  };
} 