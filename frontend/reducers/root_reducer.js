import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import PlayQueueReducer from './play_queue_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  playQueue: PlayQueueReducer,
  users: UsersReducer
});

export default RootReducer;
