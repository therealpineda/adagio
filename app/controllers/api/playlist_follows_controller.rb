class Api::PlaylistFollowsController < ApplicationController

  def create
    @follow = PlaylistFollow.new
    @playlist = Playlist.find(params[:playlist_id])
    @follow.playlist_id = @playlist.id
    @follow.follower_id = current_user.id
    if @follow.save
      render 'api/playlists/show'
    else
      render json: { Playlist: ['could not be followed.'] }, status: 422
    end
  end

  def destroy
    @follow = PlaylistFollow.find(params[:id])
    @playlist = @follow.playlist
    @follow.destroy
    render 'api/playlists/show'
  end

end
