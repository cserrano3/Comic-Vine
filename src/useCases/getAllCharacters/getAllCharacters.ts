import { Dispatch } from 'redux';
import { CHARACTERS_PER_SCROLL } from '../../helpers/constants';
import * as Service from '../../services/characters/getAllCharacters';
import { fetchingError, fetchingSuccess, reachEnd } from '../../stateManagement/characters/actions';
import { errorStatus, finishedStatus, idleStatus } from '../../stateManagement/characters/state';

export default function getAllCharacters(limit: number, offset: number) {
  return (dispatch: Dispatch) => {
    return Service.getAllCharactersService(limit, offset)
      .then(response => {
        if(!response.results.length) {
          dispatch(reachEnd(finishedStatus))
        }
        dispatch(fetchingSuccess({ 
          characters: response.results, 
          status: idleStatus,
          offset: offset }))
        return response.results
      }).catch(() => {
        dispatch(fetchingError(errorStatus))
      });
  }
}
