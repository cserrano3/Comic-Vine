import Character from '../../domains/Character';
import Error from '../../domains/Error';

export const idleStatus = "IDLE";
export const errorStatus = "ERROR";
export const loadingStatus = "LOADING";
export const finishedStatus = "FINISHED";

export type InfiniteScrollStatus =  typeof idleStatus | typeof errorStatus | typeof loadingStatus | typeof finishedStatus;

export interface CharactersState {
  characters: Array<Character>;
  status: InfiniteScrollStatus;
  error: Error;
  offset: number;
}

const initialState: CharactersState = {
  characters: [],
  status: idleStatus,
  error: null,
  offset: 0
};

export default initialState;