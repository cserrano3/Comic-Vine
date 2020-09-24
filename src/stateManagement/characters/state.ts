import Character from '../../domains/Character';
import Error from '../../domains/Error';

export interface CharactersState {
  characters: Array<Character>;
  isLoading: boolean;
  error: Error;
}

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  error: null
};

export default initialState;