import { RootState } from '../configureStore'

export const selectCharacters = (state: RootState) => {
  return state.characters.characters;
}
