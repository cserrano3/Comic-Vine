import Character from '../../domains/Character';
import Error from '../../domains/Error';

export const startFetch = "START_FETCH";
export const fetchSuccess = "FETCH_SUCCESS";
export const errorFetch = "FETCH_ERROR";
export const reachedEnd = "REACHED_END";

interface startFetch {
  type: typeof startFetch;
  payload: string;
}

interface errorFetch {
  type: typeof errorFetch;
  payload: string;
}

interface reachedEnd {
  type: typeof reachedEnd;
  payload: string;
}
interface fetchSuccess {
  type: typeof fetchSuccess;
  payload: {
    characters: Array<Character>;
    offset: number;
    status: string;
  };
}

export type CharactersActionTypes = startFetch | errorFetch | reachedEnd | fetchSuccess;
