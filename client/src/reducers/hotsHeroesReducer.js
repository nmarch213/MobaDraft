import { FETCH_HOTS_HEROES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_HOTS_HEROES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
