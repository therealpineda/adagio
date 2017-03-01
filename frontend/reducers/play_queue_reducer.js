import { RECEIVE_SONGS, RECEIVE_SONG, PLAY_SONGS, PLAY_SONG, NEXT_SONG, REMOVE_SONGS, REMOVE_SONG, SHUFFLE_SONGS, JUMP_QUEUE } from '../actions/play_queue_actions';
import { merge } from 'lodash';

const defaultState = []

const PlayQueueReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_SONGS:
    case RECEIVE_SONG:
      return oldState.concat([action.song]);
    case PLAY_SONGS:
      return action.songs;
    case PLAY_SONG:
      newState = merge([], oldState);
      newState[0] = action.song;
      return newState;
    case REMOVE_SONGS:
      newState = [];
      return newState;
    case REMOVE_SONG:
      newState = [];
      oldState.forEach( (song) => {
        if (song.id != action.song.id) {
          newState.push(song);
        };
      });
      return newState;
    case NEXT_SONG:
      newState = merge([], oldState);
      newState.shift();
      return newState;
    case JUMP_QUEUE:
      newState = oldState.slice(action.amount + 1);
      return newState;
    case SHUFFLE_SONGS:
    default:
      return oldState;
  }
};

export default PlayQueueReducer;
