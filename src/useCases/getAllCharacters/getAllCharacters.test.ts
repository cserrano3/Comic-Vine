const getAllCharactersService: jest.Mock = require('../../services/characters/getAllCharacters').getAllCharactersService

import getAllCharactersResponse from '../../mocksServiceTest/getAllCharactersResponse'

import getAllCharacters from './getAllCharacters';
import { getCharacters, getCharactersSuccess } from '../../stateManagement/characters/actions';
import CharacterServiceResponse from '../../domains/CharactersServiceResponse';

jest.mock('redux-thunk');
jest.mock('redux')

jest.mock('../../stateManagement/characters/actions');
jest.mock('../../services/characters/getAllCharacters', () => {
  return {
    getAllCharactersService: jest.fn()
  }
});



describe('getAllCharacters UseCase', () => {
  it('should bring the first page with 10 characters with success', async () => {

    const dispatch = jest.fn()
    getAllCharactersService.mockResolvedValueOnce(getAllCharactersResponse)
    const result: Array<CharacterServiceResponse> = await getAllCharacters(10, 10)(dispatch);

    expect(getAllCharactersService).toHaveBeenCalledWith(10, 10)
    expect(dispatch).toHaveBeenCalledWith(getCharacters(true))
    expect(dispatch).toHaveBeenCalledWith(getCharactersSuccess(result))
  });

  it('should dispatch an error when trying to fetch characters', async () => {

  })
})