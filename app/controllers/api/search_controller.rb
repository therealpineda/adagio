class Api::SearchController < ApplicationController
  def index
    query = params[:query]
    @songs = Song.whose_title_includes(query).includes(album: [:artist])
    @albums = Album.whose_title_includes(query)
    @playlists = Playlist.whose_name_includes(query)
    @users = User.whose_name_includes(query)
    render :index
  end

end
