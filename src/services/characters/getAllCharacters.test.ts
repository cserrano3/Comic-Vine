import axios from 'axios';
import * as Service from './getAllCharacters';
import getAllCharactersResponse from '../../mocksServiceTest/getAllCharactersResponse';

jest.mock('axios')

describe('Get All Characters', () => {
  it('should return a success response', async () => {
    const limit = 5;
    const offset = 10;
    const expectedURL = 'http://localhost:4000/get-characters?limit=5&offset=10'

    const mockAxiosGet = jest.spyOn(axios, "get");
    const expectedResult = { ...getAllCharactersResponse };

    mockAxiosGet.mockReturnValueOnce(Promise.resolve(expectedResult));

    const characters = await Service.getAllCharactersService(limit, offset);

    expect(characters).toEqual({
      results: expectedResult.data.results,
      totalResults: 138966,
      resultsPerPage: 5
    });
    expect(mockAxiosGet).toHaveBeenCalledWith(expectedURL);
  });

  it('should return an error response', async () => {
    const limit = 5;
    const offset = 600;
    const expectedURL = 'http://localhost:4000/get-characters?limit=5&offset=600'

    const mockAxiosGet = jest.spyOn(axios, "get");
    const expectedError = {
      errorMessage: 'Object not found',
      statusCode: 101
    };

    mockAxiosGet.mockRejectedValueOnce(expectedError);

    const error = await Service.getAllCharactersService(limit, offset);

    expect(error).toEqual(expectedError);
    expect(mockAxiosGet).toHaveBeenCalledWith(expectedURL);
  });
});