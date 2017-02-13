
## Sample State

```js
{
    session: {
      errors: ['Invalid username or password.']
    },
    currentUser: {
        id: 1,
        username: "johndoe",
        first_name: "John",
        image_url: "user1.jpg"
    },
    playQueue: {
        1: {
            id: 10,
            title: "Song Title",
            artist: "Artist Name",
            album: "Album Name",
            duration: "3:33"
            audio_file: "song10.mp3",
            album_image: "album1.jpg"
        },
        2: {
            id: 20,
            title: "Song Title",
            artist: "Artist Name",
            album: "Album Name",
            duration: "3:33",
            audio_file: "song20.mp3",
            album_image: "album1.jpg"
        }
    },
    artists: {
        1:  {
              id: 1,
              name: "Artist Name",
              image_url: "artist1.jpg",
              song_count: 3
            },
        2:  {
              id: 2,
              name: "Artist Name",
              image_url: "artist2.jpg",
              song_count: 3
            }
    currentArtist: {
      id: 1,
      name: "Artist Name",
      image_url: "artist1.jpg",
      albums: [
        1: {
            id: 1,
            title: "Album Title",
            image_url: "album1.jpg",
            songs: [
              {
                id: 1,
                order: 1,
                title: "Song Title",
                duration: "3:33"
              },
              {
                id: 2,
                order: 2,
                title: "Song Title",
                duration: "3:33"
              },
            ]
          }
      ]
    },
    currentUserPlaylists: {
      1: {
          id: 1,
          title: "Playlist Title",
          image_url: "playlist1.jpg",
          songs: [
              {
                  id: 1,
                  title: "Song Title",
                  artist: "Artist Name",
                  album: "Album Name"
                  duration: "3:33"
              }
          ]
        }
    },
    users: {
        1: {
            id: 1,
            username: "johndoe",
            first_name: "John",
            last_name: "Doe",
            playlists: [
                1: {
                    id: 1,
                    title: "Playlist Title"
                }
            ],
            following: [
                {
                  user_id: 2,
                  first_name: "Jane",
                  last_name: "Doe",
                  image_url: "user2.jpg"
                },
                {
                  user_id: 3,
                  first_name: "Bob",
                  last_name: "Doe",
                  image_url: "user3.jpg"
                }
            ],
        }
    },
    currentPlaylist: {
        id: 1,
        title: "Playlist Title",
        image_url: "playlist1.jpg",
        user_id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        songs: [
            {
                id: 1,
                title: "Song Title",
                artist: "Artist Name",
                album: "Album Name"
                duration: "3:33"
            }
        ]
    }
}
```
Selectors:
* currentSong
* userFollowingPlaylists
