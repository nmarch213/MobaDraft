import { combineReducers } from 'redux';
import hotsHeroesReducer from './hotsHeroesReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  hotsHeroes: hotsHeroesReducer,
  form: reduxFormReducer
});
