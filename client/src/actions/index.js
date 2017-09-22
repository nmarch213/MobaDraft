import axios from 'axios';
import { FETCH_HOTS_HEROES } from './types';

export const fetchHotsHeroes = () => async dispatch => {
  const res = await axios.get('https://api.masterleague.net/heroes.json');
  dispatch({ type: FETCH_HOTS_HEROES, payload: res.data });
};
