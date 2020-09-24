import { Dispatch } from 'redux';
import * as Service from '../../services/characters/getAllCharacters';
import { getCharacters, getCharactersSuccess, getCharactersError } from '../../stateManagement/characters/actions';

export default function getAllCharacters(limit: number, offset: number) {
  return (dispatch: Dispatch) => {
    dispatch(getCharacters(true));
    return Service.getAllCharactersService(limit, offset)
      .then(response => {
        dispatch(getCharactersSuccess(response.results));
        return response.results
      }).catch(error => {
        dispatch(getCharactersError(error))
      });
  }
}
