class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.includes(:artist, :songs).all
    render :index
  end
end
