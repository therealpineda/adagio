import React from 'react';
import { Link } from 'react-router';


class UserPlaylistIndex extends React.Component {
  render() {
    let playlists = this.props.playlists.map ((playlist) => {


      const songImages = []
      playlist.songs.forEach( (song) => {
        if (songImages.length < 4 && !songImages.includes(song.image)) {
          songImages.push(song.image);
        }
      });
      while (songImages.length < 4) {
        songImages.push(songImages[Math.floor(Math.random() * songImages.length)]);
      }

      let playlistImage = (
        <div className='user-playlist-index-item-img'
          className='playlist-default-image'>
          <img src="https://s3.amazonaws.com/adagio-prod/images/default/playlist_img.jpg"/>
        </div>
      );

      if (playlist.songs.length > 3) {
        playlistImage = (
          <div className='user-playlist-index-item-img'>
            <div className='pl-img-row'>
              <div className='pl-img-piece'><img src={songImages[0]}/></div>
              <div className='pl-img-piece'><img src={songImages[1]}/></div>
            </div>
            <div className='pl-img-row'>
              <div className='pl-img-piece'><img src={songImages[2]}/></div>
              <div className='pl-img-piece'><img src={songImages[3]}/></div>
            </div>
          </div>
        );
      }

        return (
          <li key={playlist.id} className="user-playlist-index-item">
            <Link to={`/playlists/${playlist.id}`}>

              { playlistImage }

              <div className='user-playlist-index-item-details'>
                <p className="user-playlist-index-name">{playlist.name}</p>
                <p className="user-playlist-index-songs">{playlist.num_songs} songs, {playlist.duration}</p>
                <p className="user-playlist-index-followers">{playlist.followers_count}</p>
              </div>
            </Link>
          </li>
        );
    });
    return (
      <div id='user-playlist-index'>
        <ul
          id='user-playlists-index-list'
          className='custom-scrollbar'>
          { playlists }
        </ul>
      </div>
    );

  }
}

export default UserPlaylistIndex;
