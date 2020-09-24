import axios from 'axios';
import getCharacterByName from './getCharacterByName';
import getCharacterByNameResponse from '../../mocksServiceTest/getCharacterByNameResponse';

jest.mock('axios')

describe('Get All Characters', () => {
  it('should return a success response', async () => {
    const limit = 5;
    const offset = 0;
    const expectedURL = 'http://localhost:4000/get-character-by-name?name=batman&limit=5&offset=0'

    const mockAxiosGet = jest.spyOn(axios, "get");
    const expectedResult = { ...getCharacterByNameResponse };

    mockAxiosGet.mockResolvedValueOnce(expectedResult);

    const characters = await getCharacterByName('batman', limit, offset);

    expect(characters).toEqual(expectedResult);
    expect(mockAxiosGet).toHaveBeenCalledWith(expectedURL);
  });

  it('should return an error response', async () => {
    const limit = 5;
    const offset = 0;
    const expectedURL = 'http://localhost:4000/get-character-by-name?name=aaaaaa&limit=5&offset=0'

    const mockAxiosGet = jest.spyOn(axios, "get");
    const expectedError = {
      errorMessage: 'Object not found',
      statusCode: 101
    };

    mockAxiosGet.mockRejectedValueOnce(expectedError);

    const error = await getCharacterByName('aaaaaa', limit, offset);

    expect(error).toEqual(expectedError);
    expect(mockAxiosGet).toHaveBeenCalledWith(expectedURL);
  })
})