import axios from 'axios';
import {
  FETCH_HOTS_DRAFT_LOBBY,
  POST_HOTS_DRAFT_LOBBY,
  TEAM_ONE_HERO_SELECTED,
  TEAM_TWO_HERO_SELECTED,
  TEAM_TWO_HERO_BANNED,
  TEAM_ONE_HERO_BANNED
} from './types';

export const postHotsDraftLobby = values => async dispatch => {
  const res = await axios.post('/api/hotsNewDraft', values);
  dispatch({ type: POST_HOTS_DRAFT_LOBBY, payload: res.data });
};

export const fetchHotsDraftLobby = id => async dispatch => {
  const res = await axios.get(`/api/getHotsLobby/${id}`);
  dispatch({ type: FETCH_HOTS_DRAFT_LOBBY, payload: res.data });
};

export const teamOneHeroSelected = heroId => dispatch => {
  dispatch({ type: TEAM_ONE_HERO_SELECTED, payload: heroId });
};
export const teamTwoHeroSelected = heroId => dispatch => {
  dispatch({ type: TEAM_TWO_HERO_SELECTED, payload: heroId });
};

export const teamOneHeroBanned = heroId => dispatch => {
  dispatch({ type: TEAM_ONE_HERO_BANNED, payload: heroId });
};
export const teamTwoHeroBanned = heroId => dispatch => {
  dispatch({ type: TEAM_TWO_HERO_BANNED, payload: heroId });
};
