import { PLAY_TRACK, PAUSE_TRACK } from '../actions/current_track_actions';

const defaultState = {
  playing: false,
};

const CurrentTrackReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case PLAY_TRACK:
      return { playing: true };
    case PAUSE_TRACK:
      return { playing: false };
    default:
      return oldState;
  }
};

export default CurrentTrackReducer;
