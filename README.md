# Adagio
Adagio is a music streaming web application, built with Ruby on Rails and React/Redux.

[AdagioMusic.com][heroku]

[heroku]: https://adagio-aa.herokuapp.com/

Christopher Pineda - <pineda.christopher@gmail.com>

## Features and Implementation

### 1. 'My Music' (Playlist and Playlist Song CRUD)
`User`s create `Playlist`s to save their favorite `Song`s they discover throughout the application. Songs are played by clicking the Play button to hear any playlist in its entirety, or by accessing a modal through right-clicking on any song. This modal also allows users to remove songs from the playlist or add it to additional playlists. Users can view all songs from all their playlists together through the 'Songs' tab.

### 2. 'Explore Playlists' (Following and Unfollowing Playlists)
Users 'Explore Playlists' to discover music from other users. Play the playlist directly, or follow and unfollow playlists, which immediately updates the state of both the playlist as well as the current user -- it means the playlist is immediately added to the users 'My Music', where we find all the playlists a user is following as well as their own playlists.

### 3. Following and Unfollowing Users
Users also follow and unfollow other users, which updates both users' profile pages. A user profile page shows the number of followers they have as well as all of the other users that user is following.

### 4. Continuous Music Playback While Navigating the Site
The application contains a `NowPlaying` component that holds an `AudioPlayer` and a `MiniPlayQueue` component. These are hidden to start and appear when a 'Current Song' exists in the PlayQueue state, giving the user control over their current and upcoming songs. The player is styled over an HTML5 audio tag with custom JavaScript functions to allow the user to restart, play/pause, seek, skip forward, and click ahead in the 'Play Queue' to skip directly to an upcoming song.

### 5. 'Browse' (Music Library)
Adagio features an expanding library of open source music from the Free Music Archive. Users browse through all the albums on the entire Adagio music library to discover new music. The audio files and album art are hosted on AWS.

## Future Directions for the Project

### Additional Browse Views
Index of artists and artist detail pages.

### Additional Play Queue Functionality
A separate Play Queue page for more room to view the full play queue, as well as shuffle and repeat functions to provide more variety to the listening experience.

### Private Playlists
Users can set their playlists to be private or public, allowing them to decide what appears on their profile for other users to listen to and what remains private in their own music collections.

### Search
Dynamic search to discover songs, artists, albums, and other users across the application in real time.

### Genres & Moods
Songs are designed to hold information about their genre, mood, and tempo, which will allow an additional view of a user's music by those categories.

### Radio
Generating dynamic playlists based on genre, mood, or other similar characteristics of music. Users can select from stations curated by Adagio or the application can build a station based on a user's playlist or artist.

### Explore
Highlighting featured albums, artists, songs, or other users to provide a more tailored experience for discovering new music on the application.

-- -- --


![alt text](https://licensebuttons.net/l/by-sa/4.0/88x31.png "Creative Commons")
The Adagio music library is populated by some of the talented artists at [Free Music Archive][fmu], an interactive library of high-quality, legal audio downloads directed by WFMU, and licensed under [Creative Commons][cc] All rights belong to the credited artists -- please visit their work at FMU or online for more information.  

[fmu]: http://freemusicarchive.org/about
[cc]: https://creativecommons.org/about/
