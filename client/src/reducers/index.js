import { combineReducers } from 'redux';
import hotsHeroesReducer from './hotsHeroesReducer';

export default combineReducers({
  hotsHeroes: hotsHeroesReducer
});
