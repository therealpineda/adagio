import { RECEIVE_SONGS, RECEIVE_SONG, PLAY_SONG, REMOVE_SONGS, REMOVE_SONG, SHUFFLE_SONGS } from '../actions/play_queue_actions';
import { merge } from 'lodash';

const defaultState = []

const PlayQueueReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_SONGS:
    case RECEIVE_SONG:
      return oldState.concat([aciton.song]);
    case PLAY_SONG:
      newState = merge([], oldState);
      newState.unshift(action.song);
      return newState;
    case REMOVE_SONGS:
    case REMOVE_SONG:
      newState = [];
      oldState.forEach( (song) => {
        if (song.id != action.song.id) {
          newState.push(song);
        };
      });
      return newState;
    case SHUFFLE_SONGS:
    default:
      return oldState;
  }
};

export default PlayQueueReducer;
