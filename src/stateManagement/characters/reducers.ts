import initialState, { CharactersState, idleStatus, InfiniteScrollStatus } from './state';

import {
  CharactersActionTypes,
  fetchSuccess,
  errorFetch,
  startFetch,
  reachedEnd
  
} from './actionTypes';

export default function charactersReducer(state = initialState, action: CharactersActionTypes): CharactersState {
  switch (action.type) {
    case startFetch:
      return {
        ...state,
        status: action.payload as InfiniteScrollStatus
      }
    case fetchSuccess:
      return {
        ...state,
        status: action.payload.status as InfiniteScrollStatus,
        characters: [...state.characters, ...action.payload.characters],
        offset: action.payload.offset
      }
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
