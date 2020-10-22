import { RootState } from '../configureStore'

export const selectCharacters = (state: RootState) => {
  return state.characters.characters;
}

export const selectScrollStatus = (state: RootState) => {
  return state.characters.status;
}