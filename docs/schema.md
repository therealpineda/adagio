# Database Schema

#### users

column|type|notes
---|---|---
id|integer|primary key
username|string|presence, unique
password_digest|string|presence
session_token|string|presence
first_name|string|presence
last_name|string|presence
email|string|presence, unique
image_url|string

#### artists
column|type|notes
---|---|---
id|integer|primary key
name|string|presence
image_url|string

#### albums
column|type|notes
---|---|---
id|integer|primary key
title|string|presence
artist_id|integer|presence, foreign key
image_url|string

#### songs
column|type|notes
---|---|---
id|integer|primary key
title|string|presence
duration|integer|presence
album_id|integer|presence, foreign key
order|integer|presence
audio_url|string|presence
genre|string
mood|string
tempo|integer

#### playlists
column|type|notes
---|---|---
id|integer|primary key
name|string|presence
user_id|integer|presence, foreign key

#### playlist_songs
column|type|notes
---|---|---
id|integer|primary key
playlist_id|integer|presence, foreign key
song_id|integer|presence, foreign key
order|integer|presence

#### playlist_follows
column|type|notes
---|---|---
id|integer|primary key
playlist_id|integer|presence, foreign key
user_id|integer|presence, foreign key


**All foreign keys should be indexed**
