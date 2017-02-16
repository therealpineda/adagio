class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: { Name: ['can\'t be blank.'] }, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def index
    @playlists = Playlist.includes(songs: [:artist]).where(user_id: params[:user_id])
    render :index
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :user_id)
  end

end
