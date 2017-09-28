import { combineReducers } from 'redux';
import hotsReducer from './hotsReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  hots: hotsReducer,
  form: reduxFormReducer
});
