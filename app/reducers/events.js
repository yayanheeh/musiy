import {
  EVENTS_SEARCH_START,
  EVENTS_SEARCH_SUCCESS
} from '../actions/events';

const initialState = {
  eventsSearchStarted: false,
  eventsSearchResults: []
};

export default function EventsReducer (state = initialState, action) {

  switch (action.type) {
  case EVENTS_SEARCH_START:
    return Object.assign({}, state, {
      eventsSearchStarted: action.payload
    });
  case EVENTS_SEARCH_SUCCESS:
    return Object.assign({}, state, {
      eventsSearchResults: action.payload
    });
  default:
    return state;
  }
}
