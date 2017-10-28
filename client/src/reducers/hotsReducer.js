import {
  FETCH_HOTS_DRAFT_LOBBY,
  POST_HOTS_DRAFT_LOBBY,
  TEAM_ONE_HERO_SELECTED,
  TEAM_TWO_HERO_SELECTED,
  TEAM_TWO_HERO_BANNED,
  TEAM_ONE_HERO_BANNED
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
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
        Lobby: {
          ...state.Lobby,
          HotsDraft: {
            ...state.Lobby.HotsDraft,
            teamOneDraft: state.Lobby.HotsDraft.teamOneDraft.concat(
              action.payload
            )
          }
        }
      };
    case TEAM_TWO_HERO_SELECTED:
      return {
        ...state,
        HotsDraft: {
          teamTwoDraft: state.Lobby.HotsDraft.teamTwoDraft.concat(
            action.payload
          )
        }
      };
    case TEAM_ONE_HERO_BANNED:
      return {
        ...state,
        HotsDraft: {
          teamOneBans: state.Lobby.HotsDraft.teamOneBans.concat(action.payload)
        }
      };
    case TEAM_TWO_HERO_BANNED:
      return {
        ...state,
        HotsDraft: {
          teamTwoDraft: state.Lobby.HotsDraft.teamTwoBans.concat(action.payload)
        }
      };
    default:
      return state;
  }
}
