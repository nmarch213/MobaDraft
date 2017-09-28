import _ from 'lodash';
import { FETCH_HOTS_HEROES, POST_HOTS_DRAFT_LOBBY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_HOTS_HEROES:
      return {
        ...state,
        Heroes: _.mapKeys(action.payload.results, 'id')
      };
    // case POST_HOTS_DRAFT_LOBBY:
    // return {
    //   ...state,
    //   Lobby:
    // }
    default:
      return state;
  }
}
