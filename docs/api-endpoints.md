# API Endpoints

#### HTML

**static_pages**
`GET: "/"`(or any url at domain) --- static_pages#root

#### JSON

**users**
`POST: "/api/users"` --- users#create

**session**
`POST: "/api/session"` --- sessions#create
`DELETE: "/api/session"` --- sessions#destroy

**artists**
`GET: "/api/artists"` --- artists#index
`GET: "/api/artists/:id"` --- artists#show (also fetch albums and songs)

**albums**
`GET: /api/artists/:id/albums` -- albums#index (also fetch songs)
`GET: /api/albums/:id` -- albums#show (also fetch songs)

**playlists**
`GET: /api/users/:id/playlists` -- playlist#index (also fetch songs)
`GET: /api/playlists/:id` -- playlist#show (also fetch songs)
`POST: /api/playlists` -- playlist#create
`PATCH: /api/playlists/:id` -- playlist#udpate
`DELETE: /api/playlists/:id` -- playlist#destroy

**playlist_songs**
`POST: /api/playlists/:id/songs` -- playlist_songs#create
`DELETE: /api/playlists/:id/songs` -- playlist_songs#destroy

**playlist_follows**
`POST: /api/playlists/:id/follows` -- playlist_follows#create
`DELETE: /api/playlists/:id/follows` -- playlist_follows#destroy
