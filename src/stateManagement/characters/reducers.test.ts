import Character from '../../domains/Character';
import {
  CharactersActionTypes,
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR
} from './actionTypes';
import charactersReducer from './reducers';

describe('Characters reducer', () => {
  const characterList = [
    {
      aliases: [''],
      birth: '',
      gender: 'female',
      image: {
        iconURL: '',
        mediumURL: 'image',
        screenURL: 'image',
        screenLargeURL: 'image',
        smallURL: 'image',
        superURL: 'image',
        thumbURL: 'image',
        tinyURL: 'image',
        originalURL: 'image',
        imageTags: 'image',
      },
      "name": "Laura Dunham",
      "realName": 'Laura',

    },
    {
      "aliases": ['Reed Richards', 'Invincible Man', 'Reed Benjamin', 'Mister Fantastic'],
      "birth": "02/03/1987",
      "gender": 'male',
      image: {
        iconURL: '',
        mediumURL: 'image',
        screenURL: 'image',
        screenLargeURL: 'image',
        smallURL: 'image',
        superURL: 'image',
        thumbURL: 'image',
        tinyURL: 'image',
        originalURL: 'image',
        imageTags: 'image',
      },
      "name": "Mr. Fantastic",
      "realName": "Reed Richards"
    },
    {
      "aliases": ["Jeremy Swimming Bear"],
      "birth": "02/03/1987",
      "gender": 'male',
      image: {
        iconURL: '',
        mediumURL: 'image',
        screenURL: 'image',
        screenLargeURL: 'image',
        smallURL: 'image',
        superURL: 'image',
        thumbURL: 'image',
        tinyURL: 'image',
        originalURL: 'image',
        imageTags: 'image',
      },
      "name": "Sea Urchin",
      "realName": "Jeremy Swimming Bear"
    }
  ];

  it('should return the initial state', () => {
    expect(charactersReducer(undefined, {} as CharactersActionTypes)).toEqual(
      {
        "characters": [],
        "error": null,
        "isLoading": false
      }
    );
  });

  it('should handle the GET_CHARACTER action', () => {
    const stateMock = {
      isLoading: false,
      characters: [] as Array<Character>,
      error: {
        errorMessage: '',
        status: 0
      }
    };

    const actionMock = {
      type: GET_CHARACTERS,
      payload: true
    };

    expect(charactersReducer(stateMock, actionMock as CharactersActionTypes)).toEqual({
      "characters": [],
      "error": {
        "errorMessage": "",
        "status": 0
      },
      "isLoading": true
    });
  });

  it('should handle the GET_CHARACTER_ERROR action', () => {
    const stateMock = {
      isLoading: true,
      characters: [] as Array<Character>,
      error: {
        errorMessage: '',
        status: 0
      }
    };

    const actionMock = {
      type: GET_CHARACTERS_ERROR,
      payload: {
        errorMessage: 'an error happened while loading the characters',
        status: 500
      }
    };

    expect(charactersReducer(stateMock, actionMock as CharactersActionTypes)).toEqual({
      characters: [],
      error: {
        errorMessage: 'an error happened while loading the characters',
        status: 500
      },
      isLoading: false
    });

  });

  it('should handle the GET_CHARACTERS_SUCCESS action', () => {
    const stateMock = {
      isLoading: true,
      characters: [] as Array<Character>,
      error: {
        errorMessage: '',
        status: 0
      }
    };

    const actionMock = {
      type: GET_CHARACTERS_SUCCESS,
      payload: characterList
    };

    expect(charactersReducer(stateMock, actionMock as CharactersActionTypes)).toEqual({
      isLoading: false,
      error: {
        errorMessage: '',
        status: 0
      },
      characters: characterList
    });
  });
});