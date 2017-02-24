class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.includes(:artist, :songs).all
    render :index
  end

  def show
    @album = Album.includes(:artist, songs: [:artist]).find(params[:id])
    render :show
  end
end
