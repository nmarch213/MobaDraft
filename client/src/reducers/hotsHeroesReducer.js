import _ from 'lodash';
import { FETCH_HOTS_HEROES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_HOTS_HEROES:
      return _.mapKeys(action.payload.results, 'id');
    default:
      return state;
  }
}
