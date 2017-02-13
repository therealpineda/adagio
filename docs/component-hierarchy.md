# React Components

**Routes**

Path | Component
---|---
/ | `AuthForm` or `Browse`
/login | `LogInForm`
/signup | `SignUpForm`
/browse | `Browse`
/artists/:artistId | `ArtistView`
/artists/:artistId/albums/:albumId | `AlbumDetail`
/my-music | `MyMusic`
/my-music/:playlistId | `PlaylistDetail`
/explore | `ExplorePlaylists`
/playlists/:playlistId | `PlaylistView`
/queue | `PlayQueueView`

**Root**
* Provider {store}
  * Router {hashHistory}
    * **AuthContainer**
    * **App**

**AuthContainer**
* LogInForm
    * LogInErrors {session.errors}
* SignUpForm
    *  SignUpErrors {session.errors}

**App**
* NavContainer
    * Nav {currentUser}
* NowPlayingContainer
    * NowPlaying {currentSong, songHistory, playQueue} {prevSong, pauseSong, playSong, nextSong, shuffleSongs, repeatOn, repeatOff, addSongToPlaylist}
* MainContainer
    * Browse
    * MyMusic
    * ExporePlaylists
    * PlaylistView
    * PlayQueueView

**Browse**
* AristsIndexContainer
    * ArtistsIndex {artists}
        * AristsIndexItem {artist}

**ArtistView**
* AlbumIndexContainer
  * AlbumIndex {artist.albums}
  * AlbumIndexItem {album}
* AlbumDetailContainer
    * AlbumDetail {album} {addSongsToPlayQueue}
        * SongDetailContainer
            * SongDetail (see MyMusic -- below)  

**MyMusic**
* PlaylistIndexContainer
    * PlaylistIndex {currentUser.playlists, currentUser.followedPlaylists, createPlaylist}
        * PlaylistIndexItem {playlist}
    * PlaylistDetailContainer
        * PlaylistDetail {playlist, currentUser} {editPlaylist, deletePlaylist, followPlaylist, unfollowPlaylist, addSongsToPlayQueue}
        * SongDetailContainer
            * SongDetail {song, currentSong} {playSong, addSongToPlayQueue, removeSongFromPlaylist, addSongToPlaylist}   

**ExplorePlaylists**
* UsersIndexContainer
    * UsersIndex {users}
        * UsersIndexItemContainer  
            * UsersIndexItem {user, currentUser} {followUser, unfollowUser}
        * UserDetailContainer
            * UserDetail {user, user.playlists, user.followedUsers, currentUser} {followUser, unfollowUser}

**PlaylistView**
* PlaylistDetailContainer
    * PlaylistDetail (see MyMusic -- above)
        * SongDetailContainer
            * SongDetail (see MyMusic -- above)  

**PlayQueueView**
* PlayQueueContainer
    * PlayQueue {playQueue}
        * PlayQueueSongContainer
            * PlayQueueSongDetail {song, currentSong} {playSong, removeSongFromPlaylist, addSongToPlaylist}

**BONUS**
* Browse: AlbumsView, Genres & Moods
* MyMusic: SongView, ArtistsView, AlbumsView
* PlayQueue: CurrentTrack, QueuedTracks, QueuedPlayingAlbum, QueuedPlayingPlaylist
* Search
* Radio
* Explore
