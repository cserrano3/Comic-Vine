import initialState, { CharactersState } from './state';

import {
  CharactersActionTypes,
  GET_CHARACTERS,
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS
} from './actionTypes';

export default function charactersReducer(state = initialState, action: CharactersActionTypes): CharactersState {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        isLoading: action.payload
      }
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: [...state.characters, ...action.payload]
      }
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: { ...action.payload }
      };
    default:
      return state;
  }
}
