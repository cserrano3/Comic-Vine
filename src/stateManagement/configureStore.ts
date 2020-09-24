import thunk from 'redux-thunk';
import charactersReducer from './characters/reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  characters: charactersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
