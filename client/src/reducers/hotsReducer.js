import _ from 'lodash';
import {
  FETCH_HOTS_HEROES,
  FETCH_HOTS_DRAFT_LOBBY,
  POST_HOTS_DRAFT_LOBBY,
  TEAM_ONE_HERO_SELECTED,
  TEAM_TWO_HERO_SELECTED,
  TEAM_TWO_HERO_BANNED,
  TEAM_ONE_HERO_BANNED
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_HOTS_HEROES:
      return {
        ...state,
        Heroes: _.mapKeys(action.payload.results, 'id')
      };
    case POST_HOTS_DRAFT_LOBBY:
      return {
        ...state,
        Lobby: action.payload
      };
    case FETCH_HOTS_DRAFT_LOBBY:
      return {
        ...state,
        Lobby: action.payload
      };
    case TEAM_ONE_HERO_SELECTED:
      return {
        ...state,
        Draft: {
          teamOneDraft: [...state.teamOneDraft, action.payload]
        }
      };
    case TEAM_TWO_HERO_SELECTED:
      return {
        ...state,
        Draft: {
          teamTwoDraft: [...state.teamTwoDraft, action.payload]
        }
      };
    case TEAM_ONE_HERO_BANNED:
      return {
        ...state,
        Draft: {
          teamOneBans: [...state.teamOneBans, action.payload]
        }
      };
    case TEAM_TWO_HERO_BANNED:
      return {
        ...state,
        Draft: {
          teamTwoDraft: [...state.teamTwoBans, action.payload]
        }
      };
    default:
      return state;
  }
}
