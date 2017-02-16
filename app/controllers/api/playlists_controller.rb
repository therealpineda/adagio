class Api::PlaylistsController < ApplicationController
  def create

  end

  def show

  end

  def index
    @playlists = Playlist.includes(songs: [:artist]).where(user_id: params[:user_id])
    render :index
  end

end
