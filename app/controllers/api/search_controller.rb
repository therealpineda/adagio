class Api::SearchController < ApplicationController
  def index
    query = params[:query]
    @albums = Album.whose_title_includes(query)
    @users = User.whose_name_includes(query)
    render :index
  end

end
