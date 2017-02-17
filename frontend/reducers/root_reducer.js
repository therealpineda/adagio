import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import PlayQueueReducer from './play_queue_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  playQueue: PlayQueueReducer
});

export default RootReducer;
