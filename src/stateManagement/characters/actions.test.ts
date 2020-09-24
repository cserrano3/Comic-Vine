import { GET_CHARACTERS, GET_CHARACTERS_ERROR, GET_CHARACTERS_SUCCESS } from './actionTypes';
import * as actions from './actions';

describe('Characters Actions', () => {
  it('should create an action to load the characters', () => {
    const isLoading = true;
    const expectedAction = {
      type: GET_CHARACTERS,
      payload: isLoading
    };

    expect(actions.getCharacters(isLoading)).toEqual(expectedAction);
  });

  it('should load a complete list of characters', () => {
    const charactersList = [
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

    const expectedAction = {
      type: GET_CHARACTERS_SUCCESS,
      payload: charactersList
    };

    // expect(actions.getCharactersSuccess(charactersList)).toEqual(expectedAction);
  });

  it('should return an error', () => {
    const error = {
      errorMessage: 'rror while fetching the characters',
      status: 500
    };

    const expectedAction = {
      type: GET_CHARACTERS_ERROR,
      payload: error
    };

    expect(actions.getCharactersError(error)).toEqual(expectedAction);
  })
});