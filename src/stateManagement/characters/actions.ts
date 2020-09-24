import { parseImages } from './../../converters/images';
import { parseAliases } from './../../converters/aliases';
import { formatDate } from './../../converters/date';
import Error from '../../domains/Error';
import {
  CharactersActionTypes,
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS
} from './actionTypes';
import cloneDeep from 'lodash.clonedeep';
import { mapGender } from '../../converters/mapGender';
import CharacterServiceResponse from '../../domains/CharactersServiceResponse';

export function getCharacters(isLoading: boolean): CharactersActionTypes {
  return {
    type: GET_CHARACTERS,
    payload: isLoading
  };
}

export function getCharactersSuccess(characters: Array<CharacterServiceResponse>): CharactersActionTypes {
  const newState = cloneDeep(characters);
  const parsedCharacters = newState.map(character => ({
    ...character,
    gender: mapGender(character?.gender),
    birth: character?.birth ? formatDate(character?.birth) : null,
    aliases: parseAliases(character?.aliases),
    image: parseImages(character.image)
  }));

  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: parsedCharacters
  };
}

export function getCharactersError(error: Error): CharactersActionTypes {
  return {
    type: GET_CHARACTERS_ERROR,
    payload: error
  };
}