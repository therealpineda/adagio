class Api::SearchController < ApplicationController
  def index
    @albums = Album.whose_title_includes(params[:query])
    render :index
  end

end
