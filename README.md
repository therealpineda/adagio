# Adagio
Adagio is a music streaming web application, built with Ruby on Rails and React/Redux.

:notes:  [adagio-app.com][heroku]  :notes:

[heroku]: http://www.adagio-app.com/

Christopher Pineda

<pineda.christopher@gmail.com>

## Features and Implementation

### :musical_keyboard: My Music: Playlist and Playlist Song CRUD
`User`s create `Playlist`s to save their favorite `Song`s they discover throughout the application. Songs are played by clicking the Play button to hear any playlist in its entirety, or through the song directly. Users access a custom context menu by right-clicking on any song. This modal, built with `react-modal` also allows users to remove songs from the playlist or add them to additional playlists. Users can view all songs from all their playlists together through the 'Songs' tab.

![alt text](https://s3.amazonaws.com/adagio-prod/images/readme/my-music.jpg "My Music - Adagio")

### :earth_americas: Explore Playlists: Following and Unfollowing Playlists
Users 'Explore Playlists' to discover music from other users. Play the playlist directly, or follow and unfollow playlists, which immediately updates the state of both the playlist as well as the current user. Followed playlists are immediately added to 'My Music' where users find all the playlists they're following along with all their own playlists.

### :sunglasses: Following and Unfollowing Users
Users also follow and unfollow other users. A user profile shows the number of followers they have as well as all of the users they're following. The app was designed to load the current user data immediately when the app loads, so the user's own profile is always up right away on this page while the other users' data loads.

<center>
![alt text](https://s3.amazonaws.com/adagio-prod/images/readme/explore-playlists.jpg "Explore Playlists - Adagio")
</center>

### :headphones: Continuous Music Playback While Navigating the Site
The application contains a `NowPlaying` component that holds an `AudioPlayer` and a `MiniPlayQueue` component. These are hidden to start and appear when a 'Current Song' exists in the PlayQueue state, giving the user control over their current and upcoming songs. The player is styled over an HTML5 audio tag with custom JavaScript functions to allow the user to restart, play/pause, seek, skip forward, and click ahead in the 'Play Queue' to skip directly to an upcoming song.

<center>
![alt text](https://s3.amazonaws.com/adagio-prod/images/readme/now-playing.jpg "Now Playing - Adagio")
</center>

### :minidisc: Browse: Adagio Music Library
Adagio features an expanding library of open source music from the Free Music Archive. Users browse through all the albums on the entire Adagio music library to discover new music. Audio files and album art are hosted on AWS.


## Future Directions for the Project

### :see_no_evil: Private Playlists
Users can set their playlists to be private or public, allowing them to decide what appears on their profile for other users to listen to and what remains private in their own music collections.

### :rocket: Explore
Adagio will highlight featured albums, artists, songs, or other users to provide a more tailored experience for discovering new music on the application.

### :mag: Search
Dynamically search to discover songs, artists, albums, and other users across the application in real time.

### :saxophone: Genres & Moods
Songs were designed to hold information about their genre, mood, and tempo, which will allow the user to filter and enjoy music across various different categories.

### :radio: Radio
Generate dynamic playlists based on genre, mood, or other characteristics. Users will be able to select from stations curated by Adagio, or the application can build a custom station for the user based on their favorite playlist or artist.

-- -- --

The Adagio music library is populated by talented artists from [Free Music Archive][fmu], an interactive library of high-quality, legal audio downloads directed by WFMU, and licensed under [Creative Commons][cc] All rights belong to the credited artists -- please visit their work at FMU or online for more information.  

![alt text](https://licensebuttons.net/l/by-sa/4.0/88x31.png "Creative Commons")

[fmu]: http://freemusicarchive.org/about
[cc]: https://creativecommons.org/about/



:octocat: [Christopher Pineda GitHub][git]
[git]: https://github.com/therealpineda/
