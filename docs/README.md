# Adagio
TODO: [Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.heroku.com/
[trello]: https://trello.com/b/d6rAbkUK/adagio

#### Minimum Viable Product
Adagio is a music streaming web application inspired by Spotify, and built with Ruby on Rails and React/Redux. Users can listen to music, create playlists, and follow other users' playlists.

- [ ] New account creation, login, and guest/demo login
- [ ] Hosting on Heroku
- [ ] Production README (replacing this README)
- [ ] Feature 1: Song/Playlist CRUD
- [ ] Feature 2: Playlist sharing
- [ ] Feature 3: Continuous play while navigating site
- [ ] Feature 4: Following/Friending
- [ ] (Bonus) Feature 5: Radio (shuffle play)
- [ ] (Bonus) Feature 6: Explore Page

##### Requirements for all Features:
- Adequate styling
- Smooth, bug-free navigation
- Adequate and appropriate seeds to demonstrate the feature

#### Design Docs
* [View wireframes][wireframes]
* [React components][components]
* [API endpoints][api-endpoints]
* [Database schema][schema]
* [Sample state][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

#### Development Timeline
##### Phase 1: Backend setup and user authentication (2 days)
* Set up Rails, React/Redux, and all dependencies
* Set up directories and files
* Entry file, Root and App components, routes
* Placeholders for all other components
* User model (with seeds) and API/controller
* Session API/controller
* Auth, LogIn, Session state, actions, reducers, components, and views
* Logo and other image assets for seeds
* Source audio files and hosting
* Adequate styling

##### Phase 2: Artists, Albums, and Songs Models, APIs, and Components (2 days)
* Models (with seeds) and API/controllers
* ArtistIndex, ArtistIndexItem, ArtistView
* AlbumsIndex, AlbumIndexItem, AlbumDetails
* SongsIndex, SongsIndexItems
* Adequate styling

##### Phase 3: Playlist Models, APIs, and Components (1 day)
* Model (with seeds) and API/controllers
* YourMusicNav, UserPlaylistIndex, UserPlaylistIndexItems, UserPlaylistDetail
* Users can CRUD and add songs to playlists
* Adequate styling

##### Phase 4: Users and Explore Playlists, APIs, and Components (1 day)
* Model (with seeds) and API/controllers
* ExplorePlaylists, UsersIndex, UsersIndexItem, UserDetail
* Users can follow and share playlists
* Adequate styling

##### Phase 5: Now Playing and Play Queue Components (1 day)
* Model (with seeds) and API/controllers
* NowPlaying, PlayQueue, PlayQueueSongItems
* Continuous play while navigating site
* Adequate styling

##### Phase 6: Additional Styling, Refactoring, Bonus (1 day)
* Squash bugs
* Refactor everywhere
* Improve styling
* Start bonus!

##### Bonus
* Browse: AlbumsView, Genres & Moods
* MyMusic: SongView, ArtistsView, AlbumsView
* PlayQueue: CurrentTrack, QueuedTracks, QueuedPlayingAlbum, QueuedPlayingPlaylist
* Search
* Radio with shuffle play
* Robust explore
