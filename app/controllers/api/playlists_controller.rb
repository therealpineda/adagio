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
    @playlist = Playlist.includes(:user, :followers, songs: [:artist, :album]).find(params[:id])
    render :show
  end

  def index
    @playlists = Playlist.includes(:user, :followers, songs: [:artist]).where(user_id: params[:user_id]) + current_user.followed_playlists.includes(:user, songs: [:artist])
    render :index
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update_attributes(playlist_params)
      render :show
    else
      render json: { Name: ['can\'t be blank.'] }, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :user_id)
  end

end
