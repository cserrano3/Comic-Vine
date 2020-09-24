import Character from '../../domains/Character';
import Error from '../../domains/Error';

export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
  payload: boolean;
}

interface GetCharactersSuccess {
  type: typeof GET_CHARACTERS_SUCCESS;
  payload: Array<Character>;
}

interface GetCharactersError {
  type: typeof GET_CHARACTERS_ERROR;
  payload: Error;
}

export type CharactersActionTypes = GetCharactersAction | GetCharactersSuccess | GetCharactersError;
