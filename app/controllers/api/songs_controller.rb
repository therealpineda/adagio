class Api::SongsController < ApplicationController
  def create
    @song = PlaylistSong.new
    @playlist = Playlist.find(params[:playlist_id])
    @song.playlist_id = @playlist.id
    @song.song_id = params[:songId]
    @song.order = @playlist.songs.count + 1
    if @song.save
      render 'api/playlists/show'
    else
      render json: { Song: ['could not be added.'] }, status: 422
    end
  end

  def destroy
    @song = PlaylistSong.find(params[:id])
    @playlist = @song.playlist
    @song.destroy
    render 'api/playlists/show'
  end

end
