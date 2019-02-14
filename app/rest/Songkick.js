const Songkick = require('songkick-api-node');
const songkickApi = new Songkick('WU6VBxFMe5PJkz6x');

export function searchEventsByArtistName (artistName) {
  return songkickApi.searchEvents({ artist_name: artistName });
}
