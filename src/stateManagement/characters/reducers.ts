import initialState, { CharactersState, idleStatus, InfiniteScrollStatus } from './state';

import {
  CharactersActionTypes,
  fetchSuccess,
  errorFetch,
  startFetch,
  reachedEnd
  
} from './actionTypes';
import { CHARACTERS_PER_SCROLL } from '../../helpers/constants';
import cloneDeep from 'lodash.clonedeep';

export default function charactersReducer(state = initialState, action: CharactersActionTypes): CharactersState {
  switch (action.type) {
    case startFetch:
      return {
        ...state,
        status: action.payload as InfiniteScrollStatus
      }
    case fetchSuccess:
      const newState = cloneDeep(state)
      newState.status = action.payload.status as InfiniteScrollStatus;
      newState.characters = [...newState.characters, ...action.payload.characters];
      newState.offset += CHARACTERS_PER_SCROLL
      return newState
    case reachedEnd:
      return {
        ...state,
        status: action.payload as InfiniteScrollStatus
      }
    case errorFetch:
      return {
        ...state,
        status: action.payload as InfiniteScrollStatus
      }
    default:
      return state;
  }
}
