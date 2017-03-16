import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import PlayQueueReducer from './play_queue_reducer';
import UsersReducer from './users_reducer';
import AlbumsReducer from './albums_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  playQueue: PlayQueueReducer,
  users: UsersReducer,
  albums: AlbumsReducer,
  search: SearchReducer,
});

export default RootReducer;
