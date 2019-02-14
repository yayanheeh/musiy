import * as EventsSearch from '../rest/Songkick';
import logger from 'electron-timber';
export const EVENTS_SEARCH_START = 'EVENTS_SEARCH_START';
export const EVENTS_SEARCH_SUCCESS = 'EVENTS_SEARCH_SUCCESS';

export function eventsSearchStart (query) {
  return {
    type: EVENTS_SEARCH_START,
    payload: query
  };
}

export function eventsSearchSuccess (query, result) {
  return {
    type: EVENTS_SEARCH_SUCCESS,
    payload: {
      type: query,
      info: result
    }
  };
}

export function eventsSearch (artistName) {
  return dispatch => {
    dispatch(eventsSearchStart(artistName));
    EventsSearch.searchEventsByArtistName(artistName)
      .then(events => {
        dispatch(eventsSearchSuccess(artistName, events));
      }).catch(error => {
        logger.error(error);
      });
  };
}
