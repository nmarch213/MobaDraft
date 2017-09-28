import axios from 'axios';
import { FETCH_HOTS_HEROES, POST_HOTS_DRAFT_LOBBY } from './types';

export const fetchHotsHeroes = () => async dispatch => {
  const res = await axios.get(
    'https://api.masterleague.net/heroes/?page_size=100&format=json'
  );
  dispatch({ type: FETCH_HOTS_HEROES, payload: res.data });
};

export const postHotsDraftLobby = values => async dispatch => {
  console.log(values);
  const res = await axios.post('/api/hotsNewDraft', values);
  dispatch({ type: POST_HOTS_DRAFT_LOBBY, payload: res.data });
};
